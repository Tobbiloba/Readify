"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import reviews from "@/data/review";

const ReviewCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper w-[100%] pb-10 h-[16rem]"
    >
      {reviews.map((review, i) => (
        <SwiperSlide key={i} className="cursor-pointer">
          <div className="flex flex-col items-center gap-12">
            <h1 className="max-w-[24rem] font-bold text-xl text-center text-slate-800">
              {review.review}
            </h1>

            <p className="text-[13px]">
              {review.author}{" "}
              <span className="text-neutral-400">/ {review.location}</span>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCarousel;
