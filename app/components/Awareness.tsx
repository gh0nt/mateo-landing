const AwarenessSection = () => {
  return (
    <section className="py-16 px-5">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="uppercase font-display text-2xl sm:text-3xl font-semibold text-foreground uppercase">
          Esto no es para cocinar más. Es sobre cocinar mejor que el promedio.
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Llega un punto donde seguir recetas comunes de internet ya no es
          suficiente. O subes tu estándar y aprendes a pensar como chef, o
          sigues cocinando bien… pero sin evolucionar y sorprender
        </p>

        <div className="w-16 h-1 mx-auto rounded-full fire-gradient" />

        <p className="text-muted-foreground text-lg leading-relaxed">
          El fuego no sigue reglas. Tú tampoco deberías.
        </p>
      </div>
    </section>
  );
};

export default AwarenessSection;
