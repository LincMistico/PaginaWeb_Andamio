import { contactEmail, navItems } from "../../data/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-ink/15 px-6 py-12 md:px-10">
      <div className="grid gap-10 text-caption leading-[1.5] md:grid-cols-3">
        <div>
          <p className="font-medium tracking-[0.06em] uppercase">Contacto</p>
          <p className="mt-3">{contactEmail}</p>
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
          <p className="mt-3">© {year} Andamio Labs</p>
        </div>
      </div>
    </footer>
  );
}
