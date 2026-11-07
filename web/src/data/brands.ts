// Los acentos de banner son decisión de diseño del dueño (.docs/RULES.md §3): no se cambian.
export const brands = {
  labs: {
    name: "Andamio Labs",
    logo: "/img/logo-andamio-labs-hero.png",
    accent: "#00e50f",
    labelClass: "text-[#00e50f]",
    title: "Un Laboratorio de Ideas",
    body: "Espacio de exploración, I+D y prototipado rápido. Nos enfocamos en validar hipótesis, investigar modelos de IA, análisis de sentimiento y procesamiento emocional para transformar ideas en experimentos tangibles.",
    cta: "Explorar el laboratorio",
    rectangle: {
      title: "Ideas que",
      highlight: "Escalan",
      body: "Innovación, prototipado y soluciones listas para el mercado.",
    },
  },
  tech: {
    name: "Andamio Tech",
    logo: "/img/logo-andamio-tech.png",
    accent: "#00E5D9",
    labelClass: "text-tech",
    title: "Una Fábrica de Software",
    body: "Ingeniería y desarrollo a medida para soluciones que se sostienen. Construimos plataformas escalables, arquitecturas sólidas e integración de sistemas como control de obras por QR y automatizaciones empresariales.",
    cta: "Empezar un proyecto",
    rectangle: {
      title: "Consultoría",
      highlight: "& Desarrollo",
      body: "Tecnología y ciencia para escalar tu negocio.",
    },
  },
};

export type Brand = (typeof brands)[keyof typeof brands];
