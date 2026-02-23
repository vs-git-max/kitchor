import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto ">
        <About />
      </div>
    </>
  );
}
