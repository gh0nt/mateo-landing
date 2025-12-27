import { Button } from "./ui/button";
import { Check, Shield } from "lucide-react";
import chefImage from "../assets/chef-pricing.png";

const included = [
  "Programa completo “De Principiante a Chef”, paso a paso",
  "Clases grabadas en calidad 4K, con equipo profesional, múltiples cámaras y tomas reales de cocina",
  "Técnicas y experiencia aprendidos tras 34 países cocinando alrededor del mundo",
  "Comunidad privada de personas que quieren llevar su cocina a otro nivel",
  "Actualizaciones de por vida (sin volver a pagar)",
];

const PricingSection = () => {
  return (
    <section className="py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Pricing Card - First on mobile, left on desktop */}
          <div className="flex-1 p-8 rounded-2xl bg-card border border-fire-ember/30 relative overflow-hidden order-1 lg:order-2">
            <div className="absolute inset-0 glow-overlay opacity-20 pointer-events-none" />

            <div className="relative z-10 text-center lg:text-left">
              <p className="text-fire-ember text-sm font-medium uppercase tracking-wider mb-2">
                ACCESO COMPLETO
              </p>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-1 uppercase">
                LIENZO Y FUEGO
              </h2>

              <div className="my-6">
                <span className="text-muted-foreground text-lg line-through">
                  $197 USD
                </span>
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="font-display text-5xl font-bold text-foreground">
                    $97
                  </span>
                  <span className="text-muted-foreground">USD</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">Pago único</p>
              </div>

              <ul className="space-y-3 text-left mb-8">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fire-ember flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="fire" size="xl" className="w-full mb-6">
                Quiero acceso ahora
              </Button>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground text-sm">
                <Shield className="w-4 h-4" />
                <span>Garantía de 7 días</span>
              </div>
            </div>
          </div>

          {/* Chef Image - Second on mobile, left on desktop */}
          <div className="w-full lg:w-[40%] flex-shrink-0 order-2 lg:order-1">
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-fire-ember/20 to-transparent rounded-2xl blur-xl"></div>
              <img
                src={chefImage.src}
                alt="Chef Mateo en la cocina"
                className="relative w-full h-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
