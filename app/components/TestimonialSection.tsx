import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    text: "Por primera vez entiendo por qué hago lo que hago en la cocina. Ya no sigo recetas a ciegas. Mis comidas cambiaron… y mi confianza también.",
  },
  {
    name: "Roberto S.",
    text: "Pasé de depender de recetas a improvisar con seguridad. Ahora siempre me preguntan qué cambió en mi cocina.",
  },
  {
    name: "Lucía A.",
    text: "No es solo cocinar mejor. Es disfrutar el proceso y sentir que cada plato tiene mi sello personal.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-5 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white font-display text-2xl sm:text-3xl font-semibold text-center mb-10 uppercase">
          LO QUE DICEN QUIENES YA TRANSFORMARON SU COCINA
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-fire-ember fill-fire-ember"
                  />
                ))}
              </div>
              <p className="text-foreground text-base mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-muted-foreground text-sm font-medium">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
