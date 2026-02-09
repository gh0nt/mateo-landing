import chefImage from "../assets/chef-mateo.png";
const ChefSection = () => {
  return (
    <section className="py-16 px-5">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Chef Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full bg-card border-2 border-fire-ember/30 overflow-hidden">
            <img
              src={chefImage.src}
              alt="Chef Mateo"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-fire-ember text-sm font-medium uppercase tracking-wider mb-2">
              TU GUÍA
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4 uppercase">
              CHEF MATEO CALDERÓN
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mateo ha explorado la gastronomía de más de 35 países y ha
              cocinado profesionalmente en 6 de ellos. Su experiencia no viene
              de libros: nace del fuego, de cocinas reales y de años
              desarrollando criterio culinario en distintos contextos del mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
