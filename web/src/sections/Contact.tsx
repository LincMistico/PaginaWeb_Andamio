import { contactEmail } from "../data/site";

export function Contact() {
  return (
    <section id="contacto" className="px-6 pt-[40px] pb-[100px] md:px-10">
      <p className="text-caption tracking-[0.12em] uppercase">Contacto</p>
      <h2 className="mt-4 text-[clamp(36px,6vw,75px)] leading-[1] font-medium tracking-[-0.03em]">
        Escríbenos
      </h2>
      <p className="mt-8 max-w-[36ch] text-body leading-[1.5]">
        Cuéntanos qué quieres construir. Respondemos con un plan claro, sin
        ruido.
      </p>
      <p className="mt-6">
        <a
          href={`mailto:${contactEmail}`}
          className="link-underline text-heading-sm font-medium"
        >
          {contactEmail}
        </a>
      </p>
    </section>
  );
}
