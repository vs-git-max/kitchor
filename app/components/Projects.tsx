import Container from "./container/Container";
import { kitchenDesigns } from "../data/data";
import Image from "next/image";

const Projects = () => {
  return (
    <Container>
      <div className="my-5">
        <div className="flex flex-col items-center ">
          <p className="text-accent uppercase text-sm font-medium tracking-wider">
            Our Projects
          </p>
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-secondary xl:text-4xl 2xl:text-5xl">
            Explore our Kitchen designs
          </h1>
          <p className="text-secondary/60 text-sm tracking-wider">
            Explore some of our designs made for our customers to whom there
            great designs we made.
          </p>
        </div>

        <div className="max-w-7xl mx-auto bg-gray-500/20 rounded-2xl p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  my-5 gap-4">
            {kitchenDesigns.slice(0, 6).map((design) => (
              <div
                key={design.id}
                className="relative w-full h-96 md:h-60 group  overflow-hidden"
              >
                <Image
                  src={design.image}
                  alt={design.name}
                  fill
                  className="object-cover rounded-lg  shadow-black shadow-sm"
                />
                <div className="absolute group-hover:bg-primary/80 w-full inset-0 " />
                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center flex-col cursor-pointer">
                  <h3 className="text-2xl md:text-xl font-semibold text-secondary ">
                    {design.name}
                  </h3>
                  <p className="text-lg md:text-sm font-medium text-secondary/60">
                    {design.style}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </Container>
  );
};

export default Projects;
