"use client";

import Image from "next/image";
import Button from "../ui/Button";
import CountUp from "./CountUp";

const Approach = () => {
  const workValues = [
    { value: 25, label: "Interior Design" },
    { value: 93, label: "Architecture" },
    { value: 48, label: "Construction" },
    { value: 68, label: "Projects done" },
  ];

  return (
    <div className="my-8 space-y-8">
      <div className="flex flex-col md:flex-row-reverse items-center gap-0 w-full ">
        <div className="flex-2 md:flex-1 relative w-full h-96 md:h-112.5">
          <Image
            src="/images/kitchens/design2.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className=" md:flex-1 w-full h-96 relative md:h-112.5 ">
          {" "}
          <Image
            src="/images/kitchens/design4.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 w-full bg-primary/90" />
          <div className="max-w-3xl absolute inset-0 flex flex-col justify-center gap-8 items-center md:items-start pl-12 py-8">
            <h1 className="text-secondary font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
              A modern approach <br /> to design
            </h1>
            <p className="text-sm text-secondary/70 text-center md:text-start font-medium">
              We combine innovation, functionality, and style to redefine what a
              modern kitchen can be. Every design is thoughtfully crafted to
              maximize space, streamline workflow, and create a clean,
              contemporary aesthetic. Using the latest materials, smart
              solutions, and expert craftsmanship, we turn your vision into a
              kitchen that’s not just beautiful, but also effortless to live in.
              Our modern approach ensures that each space feels fresh,
              functional, and timeless.
            </p>
            <Button>Visit our designs</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-w-xl mx-auto">
        {workValues.map((value) => (
          <div key={value.value} className="flex flex-col gap-0 px-2">
            <CountUp end={value.value} />
            <p className="text-secondary/60 font-medium text-xs md:text-lg ">
              {value.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
