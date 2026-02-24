import Image from "next/image";
import Container from "./container/Container";
import Button from "../ui/Button";
import { BsArrowRight } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";

export default function Promo() {
  return (
    <div className="w-full md:h-72 h-64 my-8 relative">
      <Image
        src="/kitchen/promo-image.jpg"
        alt="promo-image"
        fill
        className="object-cover"
      />
      <div className="absolute bg-primary/60 w-full h-full inset-0" />
      <Container className="absolute inset-0 w-full py-12">
        <div className="flex item-center justify-center gap-3 w-full flex-col md:flex-row">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-accent text-xs">Promo Video</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold">
              Ensuring a safe experience <br />
              from design to installation
            </h2>
            <p className="text-secondary/70 font-semibold text-xs">
              We&apos;re following all protocols to ensure your safety and
              insurance drives are running to enforce the same.
            </p>
            <Button>
              More videos <BsArrowRight />
            </Button>
          </div>
          <div className="relative w-1/2 ">
            <Image
              src="/kitchen/country.jpg"
              alt="holder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 w-full h-full items-center justify-center flex">
              <FaCirclePlay className="text-primary" size={22} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
