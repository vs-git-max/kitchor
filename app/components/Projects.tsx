import React from "react";
import Container from "./container/Container";

const Projects = () => {
  return (
    <Container>
      <div className="my-5">
        <div className="flex flex-col items-center ">
          <p className="text-accent uppercase text-sm font-medium tracking-wider">
            Our Projects
          </p>
          <h1 className="font-semibold text-lg md:text-xl text-secondary xl:text-2xl 2xl:text-3xl">
            Explore our Kitchen designs
          </h1>
          <p className="">
            Explore some of our designs made for our customers to whom there
            great designs we made.
          </p>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          images of the kitchen designs
        </div>
      </div>
      ;
    </Container>
  );
};

export default Projects;
