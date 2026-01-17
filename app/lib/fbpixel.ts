/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    fbq: ((...args: any[]) => void) & { loaded?: boolean };
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

// Debug flag - set to true for local testing
const DEBUG = process.env.NODE_ENV === "development";

const log = (...args: any[]) => {
  if (DEBUG) console.debug("[fbpixel]", ...args);
};

// Check if fbq is ready
const isFbqReady = (): boolean => {
  return typeof window !== "undefined" && typeof window.fbq === "function";
};

// PageView
export const pageview = (): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "PageView");
  log("PageView tracked");
};

// Track standard events (Lead, Purchase, etc.)
export const trackStandard = (
  eventName: string,
  params: Record<string, any> = {},
): void => {
  if (!isFbqReady()) {
    log(`trackStandard("${eventName}") - fbq not ready`);
    return;
  }
  window.fbq("track", eventName, params);
  log(`trackStandard("${eventName}")`, params);
};

// Track custom events
export const trackCustom = (
  eventName: string,
  params: Record<string, any> = {},
): void => {
  if (!isFbqReady()) {
    log(`trackCustom("${eventName}") - fbq not ready`);
    return;
  }
  window.fbq("trackCustom", eventName, params);
  log(`trackCustom("${eventName}")`, params);
};

// Legacy alias for backwards compatibility
export const event = trackStandard;

// Safe track with retry - waits for fbq to be ready
interface RetryOptions {
  retries?: number;
  intervalMs?: number;
}

export const safeTrackWithRetry = (
  fn: () => void,
  options: RetryOptions = {},
): Promise<boolean> => {
  const { retries = 10, intervalMs = 150 } = options;

  return new Promise((resolve) => {
    let attempts = 0;

    const tryTrack = () => {
      attempts++;

      if (isFbqReady()) {
        try {
          fn();
          log(`Event fired successfully on attempt ${attempts}`);
          resolve(true);
        } catch (e) {
          log("Error firing event:", e);
          resolve(false);
        }
        return;
      }

      if (attempts >= retries) {
        log(`fbq not ready after ${retries} attempts, giving up`);
        resolve(false);
        return;
      }

      log(`fbq not ready, retry ${attempts}/${retries}`);
      setTimeout(tryTrack, intervalMs);
    };

    tryTrack();
  });
};

// CTA redirect delay constant (ms)
export const CTA_REDIRECT_DELAY_MS = 650;

// Helper for CTA clicks with tracking
export const trackAndRedirect = async (
  url: string,
  eventName: string,
  params: Record<string, any> = {},
  options: { openInNewTab?: boolean } = {},
): Promise<void> => {
  log(`trackAndRedirect to ${url}`);

  // Fire the event
  await safeTrackWithRetry(() => trackStandard(eventName, params));

  // Delay to ensure event is sent before navigation
  await new Promise((resolve) => setTimeout(resolve, CTA_REDIRECT_DELAY_MS));

  // Navigate
  if (options.openInNewTab) {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
};
