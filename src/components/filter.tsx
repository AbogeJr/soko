import Image from "next/image";

function FilterItem({
  name,
  className,
}: Readonly<{ name: string; className: string }>) {
  return (
    <div className={className}>
      <h1 className="p-5 font-semibold text-xl md:text-3xl capitalize">
        {name}
      </h1>
      <Image
        src={`/${name}.png`}
        width={200}
        height={200}
        className="rounded-r-2xl"
        alt="arrow"
      />
    </div>
  );
}

function Filter() {
  const filters = [
    {
      name: "Casual",
      image: "/casual.png",
    },
    {
      name: "Formal",
      image: "/formal.png",
    },
    {
      name: "Party",
      image: "/party.png",
    },
    {
      name: "Sports",
      image: "/sports.png",
    },
  ];
  return (
    <section className="p-4 md:px-12">
      <div className="rounded-2xl bg-gray-200 ">
        <h1 className="font-bold uppercase text-4xl text-center p-5">
          Browse by Dress Style
        </h1>
        <div className="p-5 md:px-12">
          <div className="gap-5 border-red-500 w-full grid grid-cols-1   md:grid-cols-3">
            <FilterItem
              name="casual"
              className={`flex h-[180px] md:h-[200px] md:col-span-1 w-full justify-between  bg-white rounded-2xl`}
            />
            <FilterItem
              name="formal"
              className={`flex h-[180px] md:h-[200px] w-full md:col-span-2 justify-between  bg-white rounded-2xl`}
            />
            <FilterItem
              name="party"
              className={`flex h-[180px] md:h-[200px] md:col-span-2 w-full justify-between  bg-white rounded-2xl`}
            />
            <FilterItem
              name="sports"
              className={`flex h-[180px] md:h-[200px] md:col-span-1 w-full justify-between  bg-white rounded-2xl`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
