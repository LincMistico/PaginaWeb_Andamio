const LOGO = "/img/Logo Andamio Labs 4K.png";

/**
 * Large Leaderboard — 970×250
 * Layout: split horizontal — left dark panel, right angled image area
 * Spec: .docs/banner.json
 */
export function BannerLeaderboard() {
  return (
    <aside
      className="banner-leaderboard relative mx-auto overflow-hidden shadow-lg"
      style={{ width: 970, maxWidth: "100%", height: 250 }}
      aria-label="Banner Andamio Labs — Large Leaderboard 970×250"
    >
      <div
        className="relative flex h-full w-full"
        style={{ background: "#2B2D2F" }}
      >
        {/* Marco exterior */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{ border: "3px solid #00e50f" }}
        />

        {/* Panel izquierdo — texto + CTA */}
        <div className="relative z-10 flex w-[52%] flex-col justify-center px-8 py-5">
          <p
            className="m-0 text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: "#00E5D9", fontFamily: "Arial, sans-serif" }}
          >
            Laboratorio digital
          </p>
          <h2
            className="m-0 mt-2 text-[34px] leading-[0.95] font-black tracking-tight uppercase"
            style={{
              color: "#00E5D9",
              fontFamily: "Arial Black, Montserrat, sans-serif",
            }}
          >
            Ideas que
            <br />
            <span style={{ color: "#FFFFFF" }}>escalan</span>
          </h2>
          <p
            className="m-0 mt-3 max-w-[280px] text-[12px] leading-snug"
            style={{ color: "#FFFFFF", fontFamily: "Roboto, Arial, sans-serif" }}
          >
            Innovación, prototipado y soluciones listas para el mercado.
          </p>
          <a
            href="#contacto"
            className="mt-4 inline-flex w-fit items-center justify-center px-5 py-2 text-[12px] font-bold tracking-wide uppercase transition-opacity hover:opacity-90"
            style={{
              background: "#00E5D9",
              color: "#2B2D2F",
              borderRadius: 20,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Conoce más
          </a>
        </div>

        {/* Panel derecho — área de imagen con corte diagonal */}
        <div
          className="relative w-[48%] self-stretch"
          style={{
            clipPath: "polygon(11% 0, 100% 0, 100% 100%, 0% 100%)",
            background: "#acbccb",
          }}
        >
          <div
            className="absolute right-0 bottom-0 left-0 h-7"
            style={{
              background: "#00e549",
              transform: "skewY(-77deg)",
              transformOrigin: "left",
            }}
          />
          <div className="flex h-full items-center justify-center pl-12 pr-6">
            <img
              src={LOGO}
              alt="Andamio Labs"
              className="h-auto w-[100%] max-w-[340px] object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}