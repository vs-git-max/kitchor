"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  const image1 = "/images/image1.jpg";
  const image2 = "/images/image2.jpg";
  const image3 = "/images/image3.jpg";

  const backgroundImages = [image1, image2, image3];
  const [backgroundImage, setBackgroundImage] = useState(0);

  function handlePrev() {
    setBackgroundImage(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length,
    );
  }
  function handleNext() {
    setBackgroundImage((prev) => (prev + 1) % backgroundImages.length);
  }

  //automatic change
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prev) => (prev + 1) % backgroundImages.length);
    }, 20000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleVisitShowroom() {}

  return (
    <header className="overflow-hidden w-full h-100 lg:h-140 relative px-1 py-1 z-0">
      <Image
        className={`  object-cover transition-opacity duration-500 `}
        alt="hero-image"
        src={backgroundImages[backgroundImage]}
        fill
      />
      <div className="absolute bg-primary inset-0 opacity-50" />
      <div className="flex items-center justify-center flex-col gap-3 absolute inset-0 max-w-xl mx-auto">
        <h1 className="font-semibold text-secondary text-4xl md:text-5xl lg:text-6xl text-center">
          Design Your Kitchen with the Experts
        </h1>
        <p className="text-sm text-secondary font-medium ">$150 deposit</p>
        <p className="text-sm text-secondary font-medium">
          3D design and measurement
        </p>
        <Button hero onClick={handleVisitShowroom}>
          Visit showroom <FaArrowRight />
        </Button>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button hero onClick={handlePrev}>
          <FaArrowLeft />
        </Button>
        <Button hero onClick={handleNext}>
          <FaArrowRight />
        </Button>
      </div>
    </header>
  );
}
