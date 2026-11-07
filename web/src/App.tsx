import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";

const divider = <hr className="hairline my-[60px] md:my-[80px]" />;

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <Hero />
        {divider}
        <Services />
        {divider}
        <About />
        {divider}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
