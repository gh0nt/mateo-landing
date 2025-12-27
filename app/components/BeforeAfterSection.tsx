import { X, Check } from "lucide-react";

const beforeItems = [
  "Cocinas siguiendo recetas sin entender el porqué",
  "Tus platos están bien, pero no impresionan",
  "Dudas cuando improvisas o algo sale distinto",
  "Cocinas para cumplir, no para disfrutar ni destacar",
];

const afterItems = [
  "Entiendes la lógica detrás de cada técnica (no solo el paso a paso)",
  "Cocinas con seguridad y criterio, incluso improvisando",
  "Sorprendes a tu familia y seres queridos con platos memorables",
  "Entras a una comunidad exclusiva, con reuniones en vivo para aprender y resolver dudas con Mateo",
  "Aprendes con contenido grabado en 4K profesional, que se actualiza de por vida",
  "Abres la puerta a monetizar tu pasión, si así lo decides",
];

const BeforeAfterSection = () => {
  return (
    <section className="py-16 px-5">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-white 
        font-display text-2xl sm:text-3xl font-semibold text-center mb-10 uppercase"
        >
          EL CAMBIO QUE TE ESPERA
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before Card */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <X className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="font-display text-xl text-muted-foreground">
                Antes
              </span>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="p-6 rounded-xl bg-card border border-fire-ember/30 relative overflow-hidden">
            <div className="absolute inset-0 glow-overlay opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full fire-gradient flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-display text-xl text-fire-ember">
                  Después
                </span>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-fire-ember flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
