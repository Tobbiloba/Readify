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

export default function BestSellingBookCarousel() {
  return (
    <>
      <Swiper
        breakpoints={{
          // When the window width is >= 640px
          140: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // When the window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // When the window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          // When the window width is >= 1200px
          1200: {
            slidesPerView: 6,
            spaceBetween: 18,
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
        {books.map((book, i) => (
          <SwiperSlide
            key={i}
            className="lg:border-l-[1px] mt-0 px-2 lg:pl-4 border-gray-200 w-[100%] group relative"
          >
            <div className="relative w-fit h-fit ">
              <Image
                src={book.thumbnail}
                width={200}
                height={600}
                className="w-[100%] relative rounded-xl h-[15rem] lg:h-[25rem]"
                alt={book.title}
              />
            </div>
            <h1 className="mt-6 text-[17px] lg:text-xl font-bold text-slate-700 truncate">
              {book.title}
            </h1>
            <div className="flex items-center gap-6 font-[600] text-[15px] text-slate-600">
              <Rating name="size-small" defaultValue={2} size="small" />
              <p>5</p>
            </div>

            <p className="text-slate-400 text-[14px]">{book.author}</p>
            <h1 className="text-xl lg:text-2xl font-bold mt-2 text-[#ff6154]">
              {book.price}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
