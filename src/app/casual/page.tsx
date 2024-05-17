"use client";

import { useState } from "react";
import NextBreadcrumb from "@/components/breadcrumb";
import * as Icon from "react-feather";
import ItemCard from "@/components/item-card";
import { anton } from "@/components/navbar";

function FilterSection({
  showFilters,
  setShowFilters,
}: {
  showFilters: boolean;
  setShowFilters: (showFilters: boolean) => void;
}) {
  return (
    <div
      className={`${
        showFilters ? "flex" : "hidden"
      } md:flex flex-col bg-gray-100 p-5 rounded-3xl h-fit mb-5 md:w-[600px]`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Filters</h2>
        <Icon.X
          size={30}
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        />
      </div>
      <hr className="my-5" />
      <ul>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>T-shirts</span> <Icon.ChevronRight size={25} />
        </li>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Shorts</span> <Icon.ChevronRight size={25} />
        </li>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Shirts</span> <Icon.ChevronRight size={25} />
        </li>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Hoodies</span> <Icon.ChevronRight size={25} />
        </li>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Jeans</span> <Icon.ChevronRight size={25} />
        </li>
      </ul>
      <hr className="my-5" />
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Price</h2>
          <Icon.ChevronDown size={20} />
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Size</h2>
          <Icon.ChevronDown size={20} />
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Color</h2>
          <Icon.ChevronDown size={20} />
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Dress Style</h2>
          <Icon.ChevronUp size={25} />
        </div>
      </div>
      <ul>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Casual</span> <Icon.ChevronRight size={25} />
        </li>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Formal</span> <Icon.ChevronRight size={25} />
        </li>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Party</span> <Icon.ChevronRight size={25} />
        </li>
        <li className="py-2 flex justify-between font-light text-gray-500 items-center">
          <span>Aports</span> <Icon.ChevronRight size={25} />
        </li>
      </ul>
      <button className="bg-black text-white p-3 rounded-3xl my-5">
        Apply Filter
      </button>
    </div>
  );
}

export default function Shop() {
  const [showFilters, setShowFilters] = useState(false);
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

      <section className="p-4 md:flex md:space-x-5 md:px-12">
        <FilterSection
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
        <div className="">
          <div className="flex  justify-between items-center">
            <div className="flex justify-between  md:w-full items-center">
              <h1 className={`${anton.className} text-4xl `}>Casual</h1>
              <span className="text-gray-500 md:px-3 ml-2 text-sm">
                Showing 1-10 of 100 Products
              </span>
            </div>

            <Icon.Settings
              onClick={() => {
                setShowFilters(!showFilters);
              }}
              size={30}
              className=""
            />
          </div>

          <div className="w-full mt-5 grid gap-y-5 border-red-500 grid-cols-2 md:grid-cols-3 md:gap-5">
            <ItemCard
              image="/tshirt.png"
              name="T-Shirt"
              rating={4}
              price={1000}
            />
            <ItemCard
              image="/plaid.png"
              name="T-Shirt"
              rating={4}
              price={1000}
            />
            <ItemCard
              image="/base.png"
              name="T-Shirt"
              rating={4}
              price={1000}
            />
            <ItemCard
              image="/tshirt.png"
              name="T-Shirt"
              rating={4}
              price={1000}
            />
            <ItemCard
              image="/tshirt.png"
              name="T-Shirt"
              rating={4}
              price={1000}
            />
            <ItemCard
              image="/plaid.png"
              name="T-Shirt"
              rating={4}
              price={1000}
            />
          </div>
          <hr className="my-5" />
          <div className="flex justify-between items-center space-x-2">
            <button className="flex items-center space-x-2 p-3 px-4 border rounded-2xl">
              <Icon.ArrowLeft size={20} />
              <span>Previous</span>
            </button>
            <ul className="text-gray-400  border-red-600 justify-between w-full flex space-x-2 items-center">
              <li className=" bg-gray-200 text-black p-2 px-4 border rounded-lg">
                1
              </li>
              <li className="">2</li>
              <li className=" ">...</li>
              <li className=" ">9</li>
              <li className=" ">10</li>
            </ul>
            <button className="flex items-center space-x-2 p-3 px-4 border rounded-2xl">
              <Icon.ArrowRight size={20} />
              <span>Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
