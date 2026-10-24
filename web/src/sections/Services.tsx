const services = [
  {
    title: "Exploración",
    body: (
      <>
        Convertimos ideas complejas e hipótesis en experimentos tangibles. A través de{" "}
        <strong className="font-bold text-lg">la investigación científica y la agilidad de nuestro laboratorio</strong>
        , diseñamos prototipos con propósito — desde <strong className="text-lg"> herramientas de procesamiento emocional </strong> e <strong className="text-lg"> IA aplicada a medios </strong>, hasta potentes{" "}
        <strong className="text-lg">modelos de análisis de sentimiento respaldados por literatura académica</strong>—. Probamos, validamos y refinamos antes de dar el siguiente paso...
      </>
    ),
  },
  {
    title: "Prototipo",
    body: (
      <>
        Creamos la <strong className="font-bold text-lg">arquitectura técnica y el soporte necesario</strong> para que la innovación no se quede en el papel. Unimos el entorno
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
];

export function Services() {
  return (
    <section id="servicios" className="px-6 py-[40px] md:px-10">
      <p className="text-caption tracking-[0.12em] uppercase">Qué hacemos</p>
      <h2 className="mt-4 max-w-[16ch] text-[clamp(36px,6vw,75px)] leading-[1] font-medium tracking-[-0.03em]">
        Exploración, innovación y solución
      </h2>
      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-16">
        {services.map((item) => (
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
  );
}
