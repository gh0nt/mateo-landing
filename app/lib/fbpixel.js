export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

// PageView
export const pageview = () => {
  if (!window.fbq) return;
  window.fbq("track", "PageView");
};

// Eventos custom / estándar
export const event = (name, options = {}) => {
  if (!window.fbq) return;
  window.fbq("track", name, options);
};
