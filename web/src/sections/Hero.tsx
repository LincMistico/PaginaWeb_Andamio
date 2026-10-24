export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-gradient relative min-h-[calc(100vh-70px)] overflow-hidden px-6 pt-10 pb-20 md:px-10"
    >
      <p className="animate-rise text-caption font-medium tracking-[0.14em] uppercase">
        Laboratorio de ideas
      </p>

      <h1 className="flex items-center">
        <img
          src="/img/logo-andamio-labs-hero.png"
          alt="Andamio Labs"
          width={1400}
          height={573}
          className="h-72 w-auto object-contain mix-blend-multiply"
        />
      </h1>

      <p className="animate-rise-delay-2 mt-8 max-w-[36ch] text-body leading-[1.5]">
        Innovación aplicada, prototipos con propósito y soluciones que se
        sostienen — como un andamio bien armado.
      </p>

      <div className="animate-rise-delay-2 mt-10">
        <a href="#servicios" className="link-underline text-body-sm">
          Ver qué hacemos
        </a>
      </div>
    </section>
  );
}
