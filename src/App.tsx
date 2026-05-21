import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Terms } from "@/pages/Terms";
import { Privacy } from "@/pages/Privacy";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
    </>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="bg-night min-h-screen">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/privacidad" element={<Privacy />} />
        {/*<Route path="/cookies" element={<Cookies />} />*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
