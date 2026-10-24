const LOGO = "/img/Logo Andamio Labs 4K.png";

/**
 * Medium Rectangle — 300×250
 * Layout: top angled image mask, centered text block below
 * Spec: .docs/banner.json
 */
export function BannerRectangle() {
  return (
    <aside
      className="banner-rectangle relative mx-auto overflow-hidden shadow-lg"
      style={{ width: 300, height: 250 }}
      aria-label="Banner Andamio Tech — Medium Rectangle 300×250"
    >
      <div
        className="relative flex h-full w-full flex-col"
        style={{ background: "#2B2D2F" }}
      >
        {/* Marco exterior */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{ border: "3px solid #00E5D9" }}
        />

        {/* Máscara de imagen superior en ángulo */}
        <div
          className="relative h-[48%] w-full shrink-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 78%, 0 100%)",
            background: "#acbccb",
          }}
        >
          {/* Acento azul/turquesa en el borde diagonal */}
          <div
            className="absolute right-0 bottom-0 left-0 h-1"
            style={{
              background: "#00E5D9",
              transform: "skewY(-5deg)",
              transformOrigin: "left",
            }}
          />
          <div className="flex h-full items-center justify-center px-5 pt-2 pb-5">
            <img
              src={LOGO}
              alt="Andamio Tech"
              className="h-auto w-[80%] max-w-[220px] object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Bloque de texto centrado + CTA */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-1 pb-3 text-center">
          <h2
            className="m-0 text-[20px] leading-tight font-black tracking-tight uppercase"
            style={{
              color: "#00E5D9",
              fontFamily: "Arial Black, Montserrat, sans-serif",
            }}
          >
            Consultoría
            <br />
            <span style={{ color: "#FFFFFF" }}>& Desarrollo</span>
          </h2>
          <p
            className="m-0 mt-1.5 text-[10px] leading-snug"
            style={{ color: "#FFFFFF", fontFamily: "Roboto, Arial, sans-serif" }}
          >
            Tecnología y ciencia para escalar tu negocio.
          </p>
          <a
            href="#contacto"
            className="mt-2.5 inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-bold tracking-wide uppercase transition-opacity hover:opacity-90"
            style={{
              background: "#00E5D9",
              color: "#2B2D2F",
              borderRadius: 20,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Saber más
          </a>
        </div>
      </div>
    </aside>
  );
}