import Image from "next/image";
import Button from "../ui/Button";

const Journey = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-0 w-full my-8">
      <div className="flex-2 md:flex-1 relative w-full h-96 md:h-112.5">
        <Image
          src="/images/kitchens/design.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className=" md:flex-1 w-full h-96 relative md:h-112.5 ">
        {" "}
        <Image
          src="/images/kitchens/design6.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 w-full bg-primary/90" />
        <div className="max-w-3xl absolute inset-0 flex flex-col justify-center gap-8 items-center md:items-start pl-12 py-8">
          <div className="relative w-24 h-24 rounded-full border-accent border-3  border-double flex items-center justify-center shadow-2xl shadow-accent">
            <div className="absolute  w-20 h-20 rounded-full border-accent border-3 border-dotted flex items-center justify-center  animate-spin" />
            <div className="absolute  w-14 h-14 rounded-full border-accent border-3 border-dotted flex items-center justify-center  animate-spin" />
            <p className="font-black tracking-wider text-3xl text-accent">25</p>
          </div>
          <h1 className="text-secondary font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
            Stunning kitchens <br /> simplified process
          </h1>
          <p className="text-sm text-secondary/70 text-center md:text-start font-medium">
            We believe creating your dream kitchen should be exciting, not
            overwhelming. Our team combines thoughtful design, quality
            materials, and expert craftsmanship to deliver kitchens that are
            both beautiful and functional. From the first consultation to the
            final installation, our streamlined process keeps everything clear,
            organized, and stress-free, so you can focus on enjoying the
            transformation of your space.
          </p>
          <Button>Allow us create a new kitchen space for you</Button>
        </div>
      </div>
    </div>
  );
};

export default Journey;
