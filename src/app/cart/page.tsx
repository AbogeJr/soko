import NextBreadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import * as Icon from "react-feather";
import { anton } from "../layout";
import Testimonials, { TestimonialCard } from "@/components/testimonials";
import Button from "@/components/button";
import ProductSection from "@/components/product-section";

function ProductCard() {
  return (
    <div className="w-full flex space-x-5 items-center ">
      <Image
        src={"/tshirt.png"}
        width={100}
        height={100}
        alt="tshirt"
        className="rounded-2xl"
      />
      <div className="flex flex-col  w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">Gradient T-Shirt</h3>{" "}
          <Icon.Trash size={20} className="text-red-500" />{" "}
        </div>
        <p className="text-sm">
          Size: <span className="text-gray-400">Large</span>
        </p>
        <p className="text-sm">
          Color: <span className="text-gray-400">White</span>
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">KSh. 1800</span>
          <div className="bg-gray-200 items-center flex p-2 px-4 rounded-3xl flex-2">
            <button>
              <Icon.Minus size={20} />
            </button>
            <span className="mx-4">1</span>
            <button>
              <Icon.Plus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <h1 className={`${anton.className} text-4xl md:mb-5`}>Your Cart</h1>
        <div className="flex flex-col md:flex-row md:space-x-5  border-red-500">
          {/* Cart Products */}
          <div className="flex my-5 md:my-0 flex-col space-y-5 border rounded-3xl p-4 md:w-3/5">
            <ProductCard />
            <hr className="my-5" />
            <ProductCard />
            <hr className="my-5" />
            <ProductCard />
          </div>
          {/* Order Summary */}
          <div className="w-full h-fit  border p-4 rounded-3xl md:w-2/5">
            <h2 className="text-xl font-medium">Order Summary</h2>
            <p className="flex my-4">
              <span className="text-gray-400">Subtotal</span>
              <span className="ml-auto font-bold">KSh. 5400</span>
            </p>
            <p className="flex my-4">
              <span className="text-gray-400">Discount (-20%)</span>
              <span className="ml-auto font-bold text-red-500">- KSh. 300</span>
            </p>
            <p className="flex my-2">
              <span className="text-gray-400">Delivery Fee</span>
              <span className="ml-auto font-bold">KSh. 400</span>
            </p>
            <hr className="my-4" />
            <p className="flex my-2 text-xl">
              <span className="text-gray-900">Total</span>
              <span className="ml-auto font-bold">KSh. 5400</span>
            </p>
            <div className="flex my-4 space-x-4 items-center w-full">
              <div className="flex  items-center space-x-2 rounded-3xl p-3 bg-gray-200">
                <Icon.Tag size={20} />
                <input
                  type="text"
                  className="bg-gray-200 w-full outline-none focus:outline-none"
                  placeholder="Add promo code"
                />
              </div>
              <button className="p-3 px-6 bg-black rounded-3xl text-white">
                Apply
              </button>
            </div>
            <button className="w-full text-white p-3 rounded-3xl  bg-black mt-5 flex items-center justify-center space-x-2">
              <span>Go to Checkout</span> <Icon.ArrowRight size={25} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
