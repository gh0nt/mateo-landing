"use client";

import { Flame, Brain, Eye, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const discoveries = [
  {
    icon: Flame,
    text: "Por qué seguir recetas al pie de la letra te mantiene cocinando correcto, pero nunca memorable",
  },
  {
    icon: Brain,
    text: "Los errores invisibles que separan a quien cocina rico de quien cocina con identidad, criterio y experiencia real",
  },
  {
    icon: Eye,
    text: "Cómo piensan los chefs profesionales el fuego, el sabor y el equilibrio",
  },
  {
    icon: Sparkles,
    text: "El cambio interno que transforma platos comunes en experiencias que la gente recuerda y comenta",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

const DiscoverySection = () => {
  return (
    <section className="py-16 px-5">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white font-display text-2xl sm:text-3xl font-semibold text-center mb-10 uppercase"
        >
          LO QUE ESTÁS A PUNTO DE <span className="text-white">DESCUBRIR</span>
        </motion.h2>

        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {discoveries.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
              style={{ perspective: 1000 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg fire-gradient flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-foreground text-base sm:text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverySection;
