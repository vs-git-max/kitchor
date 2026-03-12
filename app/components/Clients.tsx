"use client";
import { useEffect, useState } from "react";
import { testimonials } from "../data/data";
import Container from "./container/Container";
import Button from "../ui/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Clients = () => {
  const [testimonial, setTestimonial] = useState<number>(0);
  const [cardsToShow, setCardsToShow] = useState<number>(2);

  useEffect(() => {
    const updateCards = () => {
      setCardsToShow(window.innerWidth < 769 ? 1 : 2);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const next = () => {
    setTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = Array.from({ length: cardsToShow }).map(
    (_, i) => testimonials[(testimonial + i) % testimonials.length],
  );

  return (
    <Container>
      <div className="overflow-hidden space-y-5 my-8">
        <div className="flex items-center w-full justify-center flex-col">
          <p className="uppercase font-medium text-sm text-accent">
            Our clients
          </p>
          <h3 className="text-center text-secondary font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Here&apos;s what our satisfied clients are saying
          </h3>
        </div>
        <div className="flex items-center justify-center gap-8 ">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start gap-3 bg-gray-500/10 p-5 max-w-xl mx-auto w-full h-64"
            >
              <p className="text-8xl text-secondary -mb-5">&quot;</p>
              <p className="text-sm font-semibold text-secondary/80 tracking-wide">
                {item.message}
              </p>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/kitchens/design.jpg"
                    alt="person"
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h1 className="text-secondary font-medium text-sm">
                    {item.name}
                  </h1>
                  <p className="text-secondary/60 font-medium tracking-wide text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-12">
          <Button onClick={prev}>
            <FaArrowLeft />
          </Button>
          <Button onClick={next}>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Clients;
