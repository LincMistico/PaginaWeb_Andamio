import { BannerRectangle } from "../components/banners/BannerRectangle";
import { brands } from "../data/brands";

export function About() {
  return (
    <section id="nosotros" className="px-6 py-[40px] md:px-10">
      <p className="text-caption tracking-[0.12em] uppercase">Nosotros</p>
      <h2 className="mt-4 max-w-[20ch] text-[clamp(36px,6vw,58px)] leading-[1.05] font-medium tracking-[-0.03em]">
        Un laboratorio & Una fábrica de Software
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {[brands.labs, brands.tech].map((brand) => (
          <div key={brand.name} className="flex flex-col justify-between">
            <div>
              <span className={`text-xs font-bold tracking-widest uppercase ${brand.labelClass}`}>
                {brand.name}
              </span>
              <h3 className="mt-2 text-2xl font-bold">{brand.title}</h3>
              <p className="mt-4 max-w-[42ch] text-body leading-[1.5]">
                {brand.body}
              </p>
              <p className="mt-4">
                <a href="#contacto" className="link-underline">
                  {brand.cta}
                </a>
              </p>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <BannerRectangle brand={brand} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
