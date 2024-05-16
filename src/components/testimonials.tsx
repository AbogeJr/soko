import { anton } from "@/app/layout";
import * as Icon from "react-feather";

export function TestimonialCard({
  name,
  rating,
  text,
}: Readonly<{ name: string; rating: number; text: string }>) {
  return (
    <div className="flex p-5 border border-gray-200 flex-col min-w-[300px]  bg-white rounded-2xl">
      <div className="flex items-center space-x-1">
        <Icon.Star size={15} className="text-yellow-500" />
        <Icon.Star size={15} className="text-yellow-500" />
        <Icon.Star size={15} className="text-yellow-500" />
        <Icon.Star size={15} className="text-yellow-500" />
        <Icon.Star size={15} className="text-yellow-500" />
      </div>
      <h1 className="text-lg mt-2 flex items-center">
        {name}{" "}
        <span>
          <Icon.CheckCircle size={15} className="text-green-500 ml-2" />
        </span>{" "}
      </h1>
      <p className="text-gray-500 mt-2 text-sm">&quot;{text}&quot;</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="px-4 mt-5 md:px-12">
      <div className="flex items-center py-2 mb-4 md:justify-between ">
        <h1
          className={`font-bold text-4xl uppercase ${anton.className} tracking-wider`}
        >
          Our Happy Customers
        </h1>
        <div className="flex ">
          <Icon.ArrowLeft size={30} className="text-gray-500" />
          <Icon.ArrowRight size={30} className="text-gray-500 " />
        </div>
      </div>
      <div className="flex flex-row overflow-x-auto space-x-5">
        <TestimonialCard
          name="Sarah M."
          rating={5}
          text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        />
        <TestimonialCard
          name="Jon D."
          rating={5}
          text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        />
        <TestimonialCard
          name="Alicent Hightower."
          rating={5}
          text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        />
      </div>
    </section>
  );
}

export default Testimonials;
