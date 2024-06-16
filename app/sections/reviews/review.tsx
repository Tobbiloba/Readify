import React from "react";
import ReviewCarousel from "./review-carousel";
// https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-bg2.jpg
const Review = () => {
  return (
    <div
      className="w-[100vw] h-[37.5rem] mt-[6rem] flex items-end px-[1rem] md:px-[5%] lg:px-[7.5%]"
      style={{
        backgroundImage:
          "url(https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-bg2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-[30rem] w-[100%] h-[27.5rem] bg-white shadow-md border rounded-t-2xl flex flex-col items-center justify-evenly px-[1rem]">
        <div className="relative">
          <h1 className="text-neutral-400 font-bold">What people saying!</h1>
          <div className="absolute w-[50%] h-[2px] -bottom-3 bg-[#ff6154] left-[25%]"></div>
        </div>

        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Review;
