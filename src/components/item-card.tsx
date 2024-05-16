import Image from "next/image";
import * as Icon from "react-feather";

function ItemCard({
  image,
  name,
  rating,
  price,
}: Readonly<{
  image: string;
  name: string;
  rating: number;
  price: number;
}>) {
  return (
    <div className="max-h-[300px] md:max-h-[500px]  min-w-[200px] max-w-[200px] md:max-w-[500px]">
      <Image
        src={image}
        className="rounded-xl md:w-[500px] md:h-[300px]"
        width={200}
        height={200}
        alt="item"
      />
      <h2 className="font-semibold my-2 md:text-2xl">{name}</h2>
      <p className="flex space-x-1 my-2">
        {" "}
        <Icon.Star size={15} className="text-yellow-500" />{" "}
        <Icon.Star size={15} className="text-yellow-500" />{" "}
        <Icon.Star size={15} className="text-yellow-500" />{" "}
        <Icon.Star size={15} className="text-yellow-500" />{" "}
        <Icon.Star size={15} className="" />{" "}
        <span className="text-xs pl-3">{rating}/5</span>
      </p>
      <p className="font-semibold  text-xl">KSh. {price}</p>
    </div>
  );
}

export default ItemCard;
