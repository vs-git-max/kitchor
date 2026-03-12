import About from "./components/About";
import Clients from "./components/Clients";
import Collection from "./components/Collection";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Promo from "./components/Promo";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto ">
        <About />
      </div>
      <Collection />
      <WhyUs />
      <Promo />
      <Projects />
      <Journey />
      <Clients />
    </>
  );
}
