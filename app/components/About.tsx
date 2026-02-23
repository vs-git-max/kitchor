import { FaArrowRight } from "react-icons/fa6";
import Button from "../ui/Button";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-center mt-4 px-2">
      <div className="py-4 px-6  w-fit rounded-2xl inline-flex items-center relative">
        <div className=" flex items-center gap-2 ">
          <span className="absolute top-0 right-0 w-6 h-10 border-t-4 border-r-4 border-accent/50" />
          <span className="absolute top-0 left-0 w-6 h-10 border-t-4 border-l-4 border-accent/50" />
          <span className="absolute bottom-0 left-0 w-6 h-10 border-b-4 border-l-4 border-accent/50" />
          <span className="absolute bottom-0 right-0 w-6 h-10 border-b-4 border-r-4 border-accent/50" />
          <p className="font-semibold text-3xl md:text-4xl lg:text-5xl text-accent">
            25
          </p>
          <p className="text-secondary/80 font-medium text-sm">
            Years <br /> experience <br />
            working
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <p className="text-sm font-semibold text-accent/80 tracking-wide">
          About us
        </p>
        <p className="text-secondary font-medium text-2xl md:text-3xl lg:text-4xl">
          Creative solutions by professional designers
        </p>
      </div>
      <div className="flex gap-3 flex-col">
        <p className="text-sm font-medium text-secondary/40">
          We are a bespoke kitchen design company creating functional,
          beautifully crafted spaces tailored to your lifestyle. From concept to
          installation, we combine smart spatial planning, premium materials,
          and expert craftsmanship to deliver kitchens that are stylish,
          efficient, and built to last.
        </p>
        <Button className="text-center flex items-center justify-center">
          Continue reading <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
