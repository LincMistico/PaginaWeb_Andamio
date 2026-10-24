import { useEffect, useRef, useState } from "react";
import { navItems } from "../../data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <div className="brand-stripe" aria-hidden />
      <header className="animate-fade relative z-30 flex h-[70px] items-center justify-between px-6 md:px-10">
        <a href="#inicio" className="flex items-center gap-2">
          <span
            aria-hidden
            className="brand-stripe inline-block h-2.5 w-2.5 rotate-45"
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
          className="link-underline hidden text-caption font-normal tracking-[0.04em] uppercase md:inline"
        >
          Hablar con nosotros ↗
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="link-underline text-caption font-normal tracking-[0.04em] uppercase md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>

        <nav
          id="menu-movil"
          aria-label="Principal"
          className="mobile-menu absolute inset-x-0 top-full border-b border-ink/15 bg-canvas px-6 pb-8 md:hidden"
          data-open={open}
          inert={!open}
        >
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-subheading font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
