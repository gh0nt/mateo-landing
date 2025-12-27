import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa en cocina?",
    answer:
      "No. Este programa está diseñado para cualquier persona que quiera desarrollar criterio culinario, sin importar su nivel actual.",
  },
  {
    question: "¿Cuánto tiempo tengo acceso al programa?",
    answer:
      "Acceso de por vida. Una vez que compras, el contenido es tuyo para siempre, incluyendo futuras actualizaciones.",
  },
  {
    question: "¿Cómo funciona la garantía?",
    answer:
      "Tienes 7 días para explorar el programa. Si no es para ti, te devolvemos el 100% sin preguntas.",
  },
  {
    question: "¿Es un curso de recetas?",
    answer:
      "No. Es un programa para desarrollar tu criterio culinario. No te damos recetas para copiar, te enseñamos a pensar como chef.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-5 bg-card">
      <div className="max-w-xl mx-auto">
        <h2 className="text-white font-display text-2xl sm:text-3xl font-semibold text-center mb-10 uppercase">
          PREGUNTAS FRECUENTES
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-5"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-fire-ember transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
