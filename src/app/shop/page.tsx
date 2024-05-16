import NextBreadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import * as Icon from "react-feather";
import { anton } from "../layout";
import Testimonials, { TestimonialCard } from "@/components/testimonials";
import Button from "@/components/button";
import ProductSection from "@/components/product-section";

export default function Shop() {
  return (
    <>
      <NextBreadcrumb
        homeElement={"Home"}
        separator={
          <Icon.ChevronRight
            size={20}
            className="mx-2 text-gray-500 font-thin"
          />
        }
        activeClasses="text-black font-bold"
        containerClasses="flex items-center py-2 p-4 md:px-12 bg-white font-thin border-red-500"
        listClasses="hover:underline "
        capitalizeLinks
      />
      <section className="p-4 md:px-12">
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex flex-col md:w-1/2 space-y-5 md:space-y-0 md:flex-row-reverse">
            <Image
              className=""
              src={"/front.png"}
              width={400}
              height={400}
              alt="tshirt"
            />
            <div className="flex md:flex-col m md:mr-5 space-x-5 items-center justify-between">
              <Image
                src={"/frontprev.png"}
                width={200}
                height={200}
                alt="tshirt"
              />
              <Image src={"/back.png"} width={200} height={100} alt="tshirt" />
              <Image src={"/mode.png"} width={200} height={100} alt="tshirt" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2
              className={`font-black text-5xl tracking-wider my-4 uppercase ${anton.className}`}
            >
              one life graphic tshirt
            </h2>
            <div className="flex mb-4 items-center space-x-1">
              <Icon.Star size={20} className="text-yellow-500" />
              <Icon.Star size={20} className="text-yellow-500" />
              <Icon.Star size={20} className="text-yellow-500" />
              <Icon.Star size={20} className="text-yellow-500" />
              <Icon.Star size={20} className="text-yellow-500" />
              <span>
                4.5/<span className="text-gray-400">5</span>
              </span>
            </div>
            <p className="font-bold mb-4 text-2xl">
              KSh. 2600 <span className="line-through text-gray-300">3000</span>
              <span className="bg-red-300 mx-2 rounded-3xl px-2 text-base text-red-500">
                -40%
              </span>
            </p>
            <p className="text-gray-500">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <hr className="my-5" />
            <div>
              <p className="font-">Select Colors</p>
              <div className="flex my-4">
                <div className="w-12 h-12 bg-black rounded-full mr-2 flex justify-center items-center">
                  <Icon.Check size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-green-900 rounded-full mx-2"></div>
                <div className="w-12 h-12 bg-yellow-950 rounded-full mx-2"></div>
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <p className="font-">Choose Size</p>

              <div className="flex font-thin my-4 items-center space-x-2 justify-between md:justify-start">
                <button className="bg-gray-200 p-2 px-4 rounded-3xl">
                  Small
                </button>
                <button className="bg-gray-200 p-2 px-4 rounded-3xl">
                  Medium
                </button>
                <button className="bg-black text-white p-2 px-4 rounded-3xl">
                  Large
                </button>
                <button className="bg-gray-200 p-2 px-4 rounded-3xl">
                  X-Large
                </button>
              </div>
            </div>
            <hr className="my-5" />

            <div className="flex  my-4 items-center space-x-2 justify-between">
              <div className="bg-gray-200 items-center flex p-2 px-4 rounded-3xl flex-2">
                <button>
                  <Icon.Minus size={20} />
                </button>
                <span className="mx-4">1</span>
                <button>
                  <Icon.Plus size={20} />
                </button>
              </div>
              <button className="bg-black text-white p-2 px-4 rounded-3xl flex-1">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="my-5 mt-10">
          <ul className="flex text-gray-500 border-b  justify-between items-center md:justify-center md:space-x-32">
            <li>Product Details</li>
            <li className="border-b-2 text-black border-black py-2">
              Ratings &amp; Reviews
            </li>
            <li>FAQs</li>
          </ul>
          <div className="flex my-5 justify-between items-center">
            <span className="font-bold">All Reviews</span>

            <div className="flex items-center space-x-3">
              <Icon.Settings size={20} />
              <button className="bg-black p-3 text-white px-6 rounded-3xl">
                Write a Review
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TestimonialCard
              name="Sarah M."
              rating={5}
              text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
            <TestimonialCard
              name="Sarah M."
              rating={5}
              text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
            <TestimonialCard
              name="Sarah M."
              rating={5}
              text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
            <TestimonialCard
              name="Sarah M."
              rating={5}
              text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-black p-3  my-5 text-white px-6 rounded-3xl">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>
      <ProductSection
        items={[
          {
            name: "Tshirt",
            image: "/tshirt.png",
            rating: 5,
            price: 2600,
          },
          {
            name: "Plaid Shirt",
            image: "/plaid.png",
            rating: 5,
            price: 2600,
          },
          {
            name: "Tshirt",
            image: "/tshirt.png",
            rating: 5,
            price: 2600,
          },
          {
            name: "Plaid Shirt",
            image: "/plaid.png",
            rating: 5,
            price: 2600,
          },
        ]}
        title={"You Might Also Like"}
      />
    </>
  );
}
