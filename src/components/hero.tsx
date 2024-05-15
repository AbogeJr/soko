import Image from "next/image";
import Button from "./button";

function Hero() {
  return (
    <section className=" bg-[#f2f0f1] flex flex-col px-4 md:px-12  pt-10 md:flex-row">
      <div className="md:w-1/2 flex flex-col md:justify-center">
        <h1 className="text-5xl my-2 font-black md:text-7xl">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-gray-500 my-2 text-sm md:text-base">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button bg="bg-black mr-auto " text="text-white">
          Shop Now
        </Button>
        <div className="flex  mt-5 flex-wrap justify-center md:justify-start space-x-5">
          <div className="flex items-center pr-5 flex-col border-r border-gray-300 flex-1/2 border-right">
            <span className="text-3xl ">200+</span>
            <p>
              <span className="text-gray-500 text-sm">
                International Brands
              </span>
            </p>
          </div>
          <div className="flex items-center md:pr-5 flex-col md:border-r border-gray-300 flex-1/2 border-right">
            <span className="text-3xl ">2,000+</span>
            <p>
              <span className="text-gray-500 text-sm">
                High-Quality Products
              </span>
            </p>
          </div>
          <div className="flex mt-5 md:mt-0 items-center  flex-col flex-1/2 border-right">
            <span className="text-3xl ">30,000+</span>
            <p>
              <span className="text-gray-500 text-sm">Happy Customers</span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2  md:px-10 border-red-500">
        <Image
          src={"/hero.png"}
          className="w-full max-h-[500px]"
          width={400}
          height={450}
          alt="hero section image"
        />
      </div>
    </section>
  );
}

export default Hero;
