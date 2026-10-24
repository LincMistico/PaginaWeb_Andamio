import { BannerLeaderboard } from "./components/BannerLeaderboard";
import { BannerRectangle } from "./components/BannerRectangle";
import { BannerRectangleTech } from "./components/BannerRectangle_tech";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Banners", href: "#banners" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-vellum-sand text-aged-ink">
      <header className="animate-fade relative z-30 flex h-[70px] items-center justify-between px-6 md:px-10">
        <a href="#inicio" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rotate-45"
            style={{ background: "var(--color-aged-ink)" }}
          />
          <span className="text-caption leading-tight font-medium tracking-[0.06em] uppercase">
            Andamio
            
            
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-caption font-normal tracking-[0.04em] uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="link-underline text-caption font-normal tracking-[0.04em] uppercase"
        >
          Hablar con nosotros ↗
        </a>
      </header>

      <main>
        {/* Hero — DESIGN.md: full-bleed vellum gradient + display type */}
        <section
          id="inicio"
          className="hero-gradient relative min-h-[calc(100vh-70px)] overflow-hidden px-6 pt-10 pb-20 md:px-10"
        >
          <p className="animate-rise text-caption font-medium tracking-[0.14em] uppercase">
            Laboratorio de ideas
          </p>

          <div className="flex items-center">
            <img
              src="/img/Logo Andamio Labs 4K.png"
              alt=""
              className="h-72 rounded-[var(--radius-images)] object-contain mix-blend-multiply"
            />
          </div>

          <p className="animate-rise-delay-2 mt-8 max-w-[36ch] text-body leading-[1.5]">
            Innovación aplicada, prototipos con propósito y soluciones que se
            sostienen — como un andamio bien armado.
          </p>

          <div className="animate-rise-delay-2 mt-10">
            <a href="#banners" className="link-underline text-body-sm">
              Ver piezas de campaña
            </a>
          </div>

          
        </section>

        <hr className="hairline my-[60px] md:my-[80px]" />

        {/* Servicios */}
        <section id="servicios" className="px-6 py-[40px] md:px-10">
          <p className="text-caption tracking-[0.12em] uppercase">Qué hacemos</p>
          <h2 className="mt-4 max-w-[16ch] text-[clamp(36px,6vw,75px)] leading-[1] font-medium tracking-[-0.03em]">
            Exploracion, innovación y solución
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-16">
            {[
              {
            title: "Exploracion",
            body: (
                        <>
                          Convertimos ideas complejas e hipótesis en experimentos tangibles. A través de{" "}
                          <strong className="font-bold text-lg text-white">la investigación científica y la agilidad de nuestro laboratorio</strong>
                          , diseñamos prototipos con propósito — desde <strong className="text-lg"> herramientas de procesamiento emocional </strong> e <strong className="text-lg"> IA aplicada a medios </strong>, hasta potentes{" "}
                          <strong className="text-lg">modelos de análisis de sentimiento respaldados por literatura académica</strong>—. Probamos, validamos y refinamos antes de dar el siguiente paso...
                        </>
                      ),
            },
            {
              title: "Prototipo",
              body: (
                        <>
                          Creamos la <strong className="font-bold text-lg text-white">arquitectura técnica y el soporte necesario</strong> para que la innovación no se quede en el papel. Unimos el entorno 
                          digital con la realidad operativa, integrando sistemas eficientes como el <strong className="text-lg">control de obras mediante códigos QR </strong>en campo o 
                          <strong className="text-lg"> automatizaciones avanzadas de datos</strong>. Diseñamos la base sobre la cual tus proyectos pueden apoyarse con total seguridad.
                        </>
                      ),
            },
            {
              title: "Entrega",
              body: (
                        <>
                          Desarrollamos e implementamos <strong className="text-lg">soluciones que se sostienen en el tiempo</strong>. Transformamos prototipos probados en <strong className="text-lg">software de nivel empresarial, plataformas 
                            escalables</strong> y herramientas de alto impacto listas para el mercado. Nos aseguramos de que cada desarrollo sea robusto, eficiente y capaz de resistir el crecimiento 
                            continuo de tu empresa.
                        </>
                      ),
            },
            ].map((item) => (
              <article key={item.title}>
                <h3 className="text-subheading leading-[1.4] font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[32ch] text-body leading-[1.5]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <hr className="hairline my-[60px] md:my-[80px]" />

        {/* Banners — banner.json formats */}
        <section id="banners" className="px-6 py-[40px] md:px-10">
          <p className="text-caption tracking-[0.12em] uppercase">
            Piezas de campaña
          </p>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(36px,6vw,75px)] leading-[1] font-medium tracking-[-0.03em]">
            Dos formatos.
            <br />
            Una marca.
          </h2>
          <p className="mt-6 max-w-[42ch] text-body leading-[1.5]">
            Banners construidos con la paleta geométrica de{" "}
            <code className="text-body-sm">banner.json</code>: marco,
            acentos cyan y logo Andamio Labs/Tech.
          </p>

          <div className="mt-16 flex flex-col items-start gap-16 lg:flex-row lg:items-end lg:gap-20">
            <figure className="w-full max-w-[970px]">
              <figcaption className="mb-4 text-caption tracking-[0.08em] uppercase">
                Large Leaderboard · 970×250
              </figcaption>
              <div className="overflow-x-auto">
                <BannerLeaderboard />
              </div>
            </figure>

            <figure>
              <figcaption className="mb-4 text-caption tracking-[0.08em] uppercase">
                Medium Rectangle · 300×250
              </figcaption>
              <BannerRectangle />
            </figure>
          </div>
        </section>

        <hr className="hairline my-[60px] md:my-[80px]" />

        {/* Nosotros */}
<section id="nosotros" className="px-6 py-[40px] md:px-10">
  <p className="text-caption tracking-[0.12em] uppercase">Nosotros</p>
  <h2 className="mt-4 max-w-[20ch] text-[clamp(36px,6vw,58px)] leading-[1.05] font-medium tracking-[-0.03em]">
    Un laboratorio & Una fábrica de Software
  </h2>

  {/* Grid de 2 columnas */}
  <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
    
    {/* Columna 1: Un Laboratorio (Andamio Labs) */}
    <div className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-bold tracking-widest text-[#00E5D9] uppercase">
          Andamio Labs
        </span>
        <h3 className="mt-2 text-2xl font-bold">Un Laboratorio de Ideas</h3>
        <p className="mt-4 max-w-[42ch] text-body leading-[1.5]">
          Espacio de exploración, I+D y prototipado rápido. Nos enfocamos en validar hipótesis, investigar modelos de IA, análisis de sentimiento y procesamiento emocional para transformar ideas en experimentos tangibles.
        </p>
        <p className="mt-4">
          <a href="#contacto" className="link-underline">
            Explorar el laboratorio
          </a>
        </p>
      </div>

      {/* Banner de Labs */}
      <div className="mt-8 flex justify-center lg:justify-start">
        <BannerRectangle />
      </div>
    </div>

    {/* Columna 2: Una Fábrica de Software (Andamio Tech) */}
    <div className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-bold tracking-widest text-[#00E5D9] uppercase">
          Andamio Tech
        </span>
        <h3 className="mt-2 text-2xl font-bold">Una Fábrica de Software</h3>
        <p className="mt-4 max-w-[42ch] text-body leading-[1.5]">
          Ingeniería y desarrollo a medida para soluciones que se sostienen. Construimos plataformas escalables, arquitecturas sólidas e integración de sistemas como control de obras por QR y automatizaciones empresariales.
        </p>
        <p className="mt-4">
          <a href="#contacto" className="link-underline">
            Empezar un proyecto
          </a>
        </p>
      </div>

      {/* Banner de Tech */}
      <div className="mt-8 flex justify-center lg:justify-start">
        <BannerRectangleTech />
      </div>
    </div>

  </div>
</section>

<hr className="hairline my-[60px] md:my-[80px]" />

        {/* Contacto */}
        <section id="contacto" className="px-6 pt-[40px] pb-[100px] md:px-10">
          <p className="text-caption tracking-[0.12em] uppercase">Contacto</p>
          <h2 className="mt-4 text-[clamp(36px,6vw,75px)] leading-[1] font-medium tracking-[-0.03em]">
            Escribenos
          </h2>
          <p className="mt-8 max-w-[36ch] text-body leading-[1.5]">
            Cuentanos qué quieres construir. Respondemos con un plan claro, sin
            ruido.
          </p>
          <p className="mt-6">
            <a
              href="mailto:andamio_Labs@outlook.com"
              className="link-underline text-heading-sm font-medium"
            >
              andamio_Labs@outlook.com
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-aged-ink/20 px-6 py-12 md:px-10">
        <div className="grid gap-10 text-caption leading-[1.5] md:grid-cols-3">
          <div>
            <p className="font-medium tracking-[0.06em] uppercase">Contacto</p>
            <p className="mt-3">andamio_Labs@outlook.com</p>
            <p>Laboratorio de ideas, innovación y solución</p>
          </div>
          <div>
            <p className="font-medium tracking-[0.06em] uppercase">Navegación</p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium tracking-[0.06em] uppercase">Legal</p>
            <p className="mt-3">© {new Date().getFullYear()} Andamio Labs</p>
            <p>Hecho con Vite + React + Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
