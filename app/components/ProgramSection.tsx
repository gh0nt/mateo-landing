"use client";
import { Flame, Palette, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "../assets/logo-lienzo.png";

const pillars = [
  {
    icon: Flame,
    title: "Dominio del fuego",
    description:
      "Aprende a usar el calor como lo hacen los chefs: intención, control y precisión.",
  },
  {
    icon: Palette,
    title: "Tu identidad culinaria",
    description: "Dejas de copiar platos. Empiezas a crear un estilo propio.",
  },
  {
    icon: ChefHat,
    title: "Mentalidad de chef",
    description: "Cocinas con criterio, seguridad y visión profesional.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateY: -25,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 14,
      mass: 1,
    },
  },
};

const ProgramSection = () => {
  return (
    <section className="py-16 px-5 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-fire-ember text-sm font-medium uppercase tracking-wider mb-3">
            FORMACIÓN CULINARIA PROFESIONAL
          </p>
          <img
            src={logoImage.src}
            alt="Lienzo y Fuego"
            className="h-10 sm:h-14 w-auto mx-auto mb-4"
          />
          <p className="text-muted-foreground text-lg max-w-lg mx-auto uppercase tracking-wide">
            Lienzo y Fuego no es un curso. Es una formación culinaria
            profesional desde casa
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ perspective: 1200 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-xl bg-background border border-border text-center"
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl fire-gradient flex items-center justify-center fire-glow">
                <pillar.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;
