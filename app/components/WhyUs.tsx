import { whyChooseUs } from "../data/data";
import Container from "./container/Container";

export default function WhyUs() {
  return (
    <Container>
      <div className="my-12 flex flex-col items-start gap-10">
        <div className="">
          <p className="text-sm underline font-semibold text-accent/80 ">
            Why choose us
          </p>
          <h2 className="text-secondary font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
            Extremely hight standard of <br /> customer satisfaction
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 items-center">
              <div className="flex items-center justify-center size-12 bg-secondary/20 rounded-full">
                <item.icon size={22} className="text-secondary" />
              </div>
              <h3 className="text-secondary font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-center text-sm font-medium text-secondary/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
