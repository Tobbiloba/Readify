"use client";
import React from "react";
import Tag from "@/components/tag/tag";
import BestSellingBookCarousel from "./best-selling-carousel";
import Image from "next/image";
import books from "@/data/books";
import Rating from "@mui/material/Rating";
import { IoIosArrowForward } from "react-icons/io";
import RoundedButton from "@/components/button/button";
const PopularBooks = () => {
  const topBooks = books.slice(0, 4);
  const bottomBooks = books.slice(5, 9);
  return (
    <div className="mt-20  h-fit px-[1rem] lg:px-0 bg-red-00">
      <Tag title="Popular Books" link="/" />
      {/* <BestSellingBookCarousel /> */}

      <div className="max-w-[80rem] h-fit mx-auto flex flex-col lg:flex-row gap-5">
        <div className="lg:w-8/12 h-fit">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {topBooks.map((book, i) => (
              <div className="lg:border-l-[1px] mt-0 px-2 lg:pl-4 border-gray-200 w-[100%] group relative">
                <div className="relative w-fit h-fit ">
                  <Image
                    src={book.thumbnail}
                    width={200}
                    height={600}
                    className="w-[100%] relative rounded-xl h-[15rem] lg:h-[15rem]"
                    alt={book.title}
                  />
                </div>
                <h1 className="mt-6 text-[14px] lg:text-[17px] font-bold text-slate-700 truncate">
                  {book.title}
                </h1>
                <div className="flex items-center gap-6 font-[600] text-[15px] text-slate-600">
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <p>5</p>
                </div>

                <p className="text-slate-400 text-[14px]">{book.author}</p>
                <h1 className="text-[18px] font-bold mt-2 text-[#ff6154]">
                  {book.price}
                </h1>
              </div>
            ))}
          </div>
          <hr className="w-[100%] my-12" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {bottomBooks.map((book, i) => (
              <div className="lg:border-l-[1px] mt-0 px-2 lg:pl-4 border-gray-200 w-[100%] group relative">
                <div className="relative w-fit h-fit ">
                  <Image
                    src={book.thumbnail}
                    width={200}
                    height={600}
                    className="w-[100%] relative rounded-xl h-[15rem] lg:h-[15rem]"
                    alt={book.title}
                  />
                </div>
                <h1 className="mt-6 text-[14px] lg:text-[17px] font-bold text-slate-700 truncate">
                  {book.title}
                </h1>
                <div className="flex items-center gap-6 font-[600] text-[15px] text-slate-600">
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <p>5</p>
                </div>

                <p className="text-slate-400 text-[14px]">{book.author}</p>
                <h1 className="text-[18px] font-bold mt-2 text-[#ff6154]">
                  {book.price}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-4/12 flex p-[3rem] items-end relative rounded-2xl overflow-hidden">
          <img
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-banner1.jpg"
            className="w-[100%] h-[100%]  absolute top-0 left-0"
          />

          <div className="relative z-10 mt-[20rem] lg:mt-0 text-white">
            <p className="text-2xl font-[500]">Best Offer</p>
            <h1 className="text-6xl font-bold">Save $15</h1>
            <p className="text-[13px] mt-2">on selected items</p>

            <RoundedButton className="px-10 py-3 rounded-full mt-4 w-fit cursor-pointer">
              See More
            </RoundedButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularBooks;
