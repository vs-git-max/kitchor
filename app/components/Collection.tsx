import Image from "next/image";
import { kitchenLayouts } from "../data/data";
import Container from "./container/Container";

export default function Collection() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 gap-4">
        {kitchenLayouts.map((kitchenLayout) => (
          <div
            key={kitchenLayout.slug}
            className="relative w-full h-96 rounded-xl overflow-hidden group"
          >
            <Image
              className="object-cover"
              src={kitchenLayout.image}
              alt={kitchenLayout.title}
              fill
            />

            <div className="inset-0 absolute bg-primary/20 w-full h-full flex justify-between flex-col  pt-3 ">
              <h4 className="font-semibold text-secondary text-lg px-4">
                {kitchenLayout.title} <br />
                collection
              </h4>
              <div className="group-hover:flex hidden flex-col bg-primary/50 py-3 px-4 gap-2 group-hover:duration-500 transition-all">
                <p className="text-secondary/70 font-medium ">
                  {kitchenLayout.shortDescription}
                </p>
                <p className="text-accent text-sm cursor-pointer">
                  Read more...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
