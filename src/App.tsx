import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

function App() {
  return (
    <div className="bg-[#030303] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
