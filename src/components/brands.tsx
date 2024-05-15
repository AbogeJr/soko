import Image from "next/image";
import React from "react";

function Brands() {
  const brands = [
    {
      name: "versace",
      image: "/versce.png",
    },
    {
      name: "Zara",
      image: "/zara.png",
    },
    {
      name: "Gucci",
      image: "/gucci.png",
    },
    {
      name: "Prada",
      image: "/prada.png",
    },
    {
      name: "Calvin Clein",
      image: "/ck.png",
    },
  ];
  return (
    <div className="grid bg-black gap-5 grid-cols-5 py-10 px-4">
      {brands.map((brand) => (
        <div key={brand.name} className="flex justify-center items-center">
          <Image width={100} height={750} src={brand.image} alt={brand.name} />
        </div>
      ))}
    </div>
  );
}

export default Brands;
