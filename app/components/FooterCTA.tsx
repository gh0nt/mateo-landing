"use client";
import { Button } from "./ui/button";
import chefImage from "../assets/chef-mateo.png";
import logoImage from "../assets/logo-lienzo.png";
import NeonArrows from "./NeonArrows";

const FooterCTA = () => {
  return (
    <section className="py-16 px-5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight uppercase">
              TU PRÓXIMO PLATO MEMORABLE NO ESTÁ LEJOS,{" "}
              <span className="italic text-fire-ember font-normal">
                ESTÁ A UNA DECISIÓN
              </span>
            </h2>
            <p className="uppercase text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0 uppercase tracking-wide">
              Únete a Lienzo y Fuego y aprende a cocinar como un chef accede a
              esta comunidad y destaca en cada plato.
            </p>
            <div className="uppercase flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="relative">
                <Button
                  onClick={() =>
                    (window.location.href =
                      "https://hotmart.com/es/marketplace/productos/de-principiante-a-chef/P97284882E")
                  }
                  variant="fire"
                  size="xl"
                >
                  Quiero subir de nivel ahora
                </Button>
                <NeonArrows />
              </div>
            </div>
          </div>

          {/* Chef Image */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-fire-ember/20 to-transparent rounded-2xl blur-xl"></div>
              <img
                src={chefImage.src}
                alt="Chef Mateo presentando un plato gourmet"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Footer with Logo */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col items-center gap-4">
          <img
            src={logoImage.src}
            alt="Lienzo y Fuego"
            className="h-10 sm:h-12 w-auto brightness-0 invert opacity-80"
          />
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Lienzo y Fuego. Todos los derechos
            reservados.
          </p>
          <p className="text-muted-foreground text-sm text-center">
            ¿Necesitas web? Contacta a{" "}
            <a href="https://marcelopuentes.com">Marcelo Puentes</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
