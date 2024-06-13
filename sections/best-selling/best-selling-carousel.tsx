'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import books from '@/data/books';

export default function BestSellingBookCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          books.map((book, i) => <SwiperSlide key={i} className=''>
            <h1>{book.author}</h1>
          </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
