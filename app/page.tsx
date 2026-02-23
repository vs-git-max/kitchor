import About from "./components/About";
import Collection from "./components/Collection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto ">
        <About />
      </div>
      <Collection />
    </>
  );
}
