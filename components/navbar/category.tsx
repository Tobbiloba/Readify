import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu4Fill } from "react-icons/ri";

const categories = [
  {
    icon: "/categories/spy.png",
    name: "Action & Adventure",
    href: "/action",
  },
  {
    icon: "/categories/america.png",
    name: "Americas",
    href: "/americas",
  },
  {
    icon: "/categories/palette.png",
    name: "Arts & Photography",
    href: "/arts",
  },
  {
    icon: "/categories/bokok1.png",
    name: "Biographies",
    href: "/bography",
  },
  {
    icon: "/categories/boy.png",
    name: "Children's Books",
    href: "/children",
  },

  {
    icon: "/categories/conductor.png",
    name: "Classics",
    href: "/classic",
  },
  {
    icon: "/categories/red-flag.png",
    name: "Contemporary",
    href: "/americas",
  },
  {
    icon: "/categories/e-learning.png",
    name: "Education & Reference",
    href: "/arts",
  },
  {
    icon: "/categories/genres.png",
    name: "Genre Fiction",
    href: "/bography",
  },
  {
    icon: "/categories/history-book.png",
    name: "Historical",
    href: "/children",
  },
];
const Category = () => {
  return (
    <nav className="hidden md:block ">
      <div className="px-8 py-3 w-64 bg-[#ff6154] rounded-xl flex items-center cursor-pointer relative group">
        <span>
          <RiMenu4Fill className="text-white text-xl" />
        </span>
        <span className="capitalize ml-2 text-[14px] text-white">All categories</span>
        <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50">
          {categories.map((category, i) => (
            <div
              key={i}
              className="flex items-center hover:bg-red-100 text-gray-500 hover:text-[#ff6154] gap-4 py-3 px-5"
            >
              <Image
                alt={category.name}
                width={20}
                height={20}
                src={category.icon}
                className="w-6 h-6"
              />
              <h1 className="text-[14px]">{category.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Category;
