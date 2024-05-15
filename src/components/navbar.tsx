"use client";
import * as Icon from "react-feather";
import Cta from "./cta";

function Navbar() {
  return (
    <header className="bg-white sticky w-full top-0 z-50 border-red-500">
      <nav className="flex p-4 md:px-12 justify-between items-center">
        <div className="flex justify-center items-center space-x-2">
          <Icon.Menu size={40} className="md:hdden" />
          <h1 className="font-bold text-3xl">SOKO.KE</h1>
        </div>
        <ul className="hidden md:flex space-x-5 text-gray-500 items-center">
          <li className="flex items-center ">
            Shop <Icon.ChevronDown className="ml-1" size={15} />{" "}
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
          <input
            type="text"
            placeholder="Search for Products"
            className="bg-gray-200 rounded-3xl p-3"
          />
        </ul>
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
