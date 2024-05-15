import React from "react";
import ItemCard from "./item-card";
import Button from "./button";

function ProductSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; image: string; rating: number; price: number }[];
}) {
  return (
    <section className="p-4 md:px-12">
      <h1 className="font-bold text-4xl uppercase text-center mb-5">{title}</h1>
      <div className="flex space-x-5 md:grid md:gap-x-5 overflow-x-auto  md:grid-cols-4">
        {items.map((item) => (
          <ItemCard
            key={item.name}
            image={item.image}
            name={item.name}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button bg="bg-white" text="text-black">
          View All
        </Button>
      </div>
      <hr className="mt-5" />
    </section>
  );
}

export default ProductSection;
