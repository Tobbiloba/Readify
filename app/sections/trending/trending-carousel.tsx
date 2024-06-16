"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import books from "@/data/books";
import Image from "next/image";

import Rating from "@mui/material/Rating";
import { BsBag } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import getRandomTailwindColor from "@/lib/color";

export default function TrendingCarouse() {
  return (
    <>
      <Swiper
        breakpoints={{
          // When the window width is >= 640px
          140: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // When the window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // When the window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
        // spaceBetween={18}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        {books.map((book, i) => {

          return (
            <SwiperSlide
              key={i}
              
            >
             <div className={`mt-0 p-4 w-[100%] flex flex-col lg:flex-row items-center gap-6 border group relative rounded-2xl ${getRandomTailwindColor(i)}`}>
             <div className="relative w-[100%] lg:w-5/12 h-fit">
                <Image
                  src={book.thumbnail}
                  width={200}
                  height={600}
                  className="w-[100%] relative rounded-xl h-auto lg:h-[20rem]"
                  alt={book.title}
                />
              </div>
              <div className="flex flex-col gap-2 lg:w-7/12">
              <h1 className=" text-[17px] lg:text-xl font-bold text-slate-800 truncate">
                {book.title}
              </h1>
              <div className="flex items-center gap-6 font-[600] text-[15px] text-slate-600">
                <Rating name="size-small" defaultValue={2} size="small" />
                <p>5</p>
              </div>
              <p className="text-slate-400 text-[14px]">{book.author}</p>

              <p className="text-slate-500 text-[15px]">{book.description}</p>
              <h1 className="text-xl lg:text-2xl font-bold mt-2 text-[#ff6154]">
                {book.price}
              </h1>
              </div>
             </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
