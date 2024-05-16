"use client";
import Link from "next/link";
import * as Icon from "react-feather";
import { useState } from "react";
import { Anton } from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--anton",
});

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white sticky w-full top-0 z-50 border-red-500">
      <nav className="flex p-4 md:px-12 justify-between items-center">
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => {
              console.log("clicked");
              setMobileMenu(!mobileMenu);
            }}
          >
            <Icon.Menu size={40} className="md:hdden" />
          </button>
          <Link href={"/"}>
            <h1 className={`font-bold text-3xl ${anton.className}`}>SOKO.KE</h1>
          </Link>
        </div>
        <ul className="hidden md:flex space-x-5 text-gray-500 items-center">
          <li className="hover:text-[orangered]">
            <Link className="flex items-center " href="/shop">
              Shop <Icon.ChevronDown className="ml-1" size={15} />{" "}
            </Link>
          </li>
          <li className="hover:text-[orangered]">
            <Link href={"#"}>On Sale</Link>{" "}
          </li>
          <li className="hover:text-[orangered]">
            {" "}
            <Link href={"#"}>New Arrivals</Link>{" "}
          </li>
          <li className="hover:text-[orangered]">
            {" "}
            <Link href={"#"}>Brands</Link>{" "}
          </li>
          <div className="flex items-center bg-gray-200 p-2 px-4 rounded-3xl">
            <Icon.Search size={20} />
            <input
              type="text"
              placeholder="Search for Products"
              className="px-2 border bg-gray-200 border-none focus:outline-none w-48"
            />
          </div>
        </ul>
        <div
          className={`${
            mobileMenu ? "block" : "hidden"
          } md:hidden fixed top-0 p-5 left-0 w-full h-screen bg-gray-200 z-50`}
        >
          <div className="flex items-center space-x-5">
            <button
              className="block"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <Icon.ArrowLeft size={20} />
            </button>
            <div className="flex items-center bg-gray-300 p-2 px-4 rounded-3xl">
              <Icon.Search size={20} />
              <input
                type="text"
                placeholder="Search for Products"
                className="px-2 border bg-gray-300 border-none focus:outline-none w-full"
              />
            </div>
          </div>
          <ul className="flex uppercase flex-col mt-5 justify-center items-center space-y-3 text-2xl font-bold">
            <li>
              <Link
                href="/shop"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                On Sale
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <Icon.Search size={30} className="md:hidden" />
          <Icon.ShoppingCart size={30} />
          <Icon.User size={30} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
