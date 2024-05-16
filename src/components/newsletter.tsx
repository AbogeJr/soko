import React from "react";
import Button from "./button";
import { anton } from "@/app/layout";

function NewsLetter() {
  return (
    <section className="p-4 md:px-12">
      <div className="bg-black p-4 flex py-6 rounded-2xl text-white flex-col md:flex-row">
        <h2
          className={`text-4xl md:text-5xl font-bold md:w-2/3 md:p-10 ${anton.className} tracking-wider`}
        >
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="md:w-1/3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 px-5 rounded-3xl bg-white w-full mt-5"
          ></input>
          <Button bg="bg-white" text="text-black ">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
