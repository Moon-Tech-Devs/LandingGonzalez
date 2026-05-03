import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FallingPattern } from "@/components/ui/falling-pattern";

function App() {
  return (
    <div className="bg-[#030303] min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative isolate overflow-hidden">
        <FallingPattern className="absolute inset-0 pointer-events-none opacity-70" />
        <div className="relative z-10">
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
