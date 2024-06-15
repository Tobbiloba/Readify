'use client'
import React from "react";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import Rating from "@mui/material/Rating";
import MagneticButton from "@/components/magnetic/magnetic";
const bookDeals = [
  {
    title: "P.S. Never in a Million Years",
    description:
      "Labore voluptate quidem sint voluptate vero explicabo illo necessitatibus. Laudantium molestiae minima rerum fuga tenetur sint consequatur autem.",
    thumbnail:
      "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/27.jpg",
    price: "$664.55 – $906.29",
    author: "Marcella Bennett",
    sku: "SYNER9529",
    categories: [
      "Action & Adventure",
      "Activity Books",
      "Arts & Literature",
      "Cultural",
    ],
    tags: ["Books", "Fiction", "Romance - Contemporary"],
    availableAmount: "5",
  },
  {
    title: "A Crown of Petals and Ice",
    description:
      "Cum ad et sint ut neque molestias. Illo possimus eos quas alias. Recusandae omnis fugiat sequi. Nesciunt rem perferendis consectetur rerum dolores.",
    thumbnail:
      "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg",
    price: "$95.91",
    author: "Karla Newman",
    sku: "B85927643",
    categories: ["Action & Adventure", "Activity Books", "Cultural"],
    tags: ["Books", "Fiction", "Romance - Contemporary"],
    availableAmount: "15",
  },
  {
    title: "House of Sky and Breath",
    description:
      "Quis est iste et aliquam similique facere. Corrupti et et laborum ab. Voluptatem ea possimus quaerat sit laborum sed non.",
    thumbnail:
      "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/31.jpg",
    price: "$72.99",
    author: " Ernesto Wade",
    sku: "GORGE231",
    categories: ["Action & Adventure", "Activity Books", "Cultural"],
    tags: ["Books", "Fiction", "Romance - Contemporary"],
    availableAmount: "30",
  },
];
const DealBanner = () => {
  return (
    <main className="div-container px-[1rem] flex flex-col lg:h-[40rem] mt-10 lg:flex-row gap-6">
      <div className="lg:w-8/12 h-[100%] rounded-2xl overflow-hidden relative bg-[#ff6154]">
        <div className="relative h-[100%] px-[1rem] overflow-hidden z-10 flex py-6 lg:py-12 flex-col justify-evenly items-center gap-12 lg:gap-20">
          <MagneticButton>
            <img
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-img1.png"
              className="w-100 h-auto"
            />
          </MagneticButton>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-white justify-evenly lg:items-center w-[100%]">
            <div>
              <p className="text-[13px] mb-2">NEW YEAR, NEW BOOK</p>
              <h1 className="text-4xl font-bold flex w-fit text- relative">
                The Best New <br /> Books Of June
                {/* <Image
                  src="/svg/svg-line.webp"
                  width={230}
                  height={30}
                  className="absolute top-12"
                  alt="svg line"
                /> */}
              </h1>
            </div>

            <div>
              <p className="text-[13px] mb-2">Hurry the deals run out soon.</p>

              <div className="flex items-center gap-3 w-fit bg-yellow-300 text-black px-6 py-2 rounded-full">
                <CiClock2 className="text-xl" />
                <h1 className="text-xl font-[500]">00:00:00:00</h1>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-bg1.jpg"
          className="absolute top-0 left-0 w-[150vw] lg:w-[100%] h-[100%]"
        />
      </div>

      <div className="grid grid-rows-3 gap-3 lg:w-4/12 h-[100%]">
        {bookDeals.map((deal, i) => (
          <div
            key={i}
            className={`flex items-center gap-5 h-[100%] ${
              i !== 0 && "border-t pt-3"
            }`}
          >
            <Image
              src={deal.thumbnail}
              width={160}
              height={50}
              className="h-[100%] rounded-2xl"
              alt={deal.title}
            />

            <div>
              <h1 className="font-bold mb-2 text-[16px]">{deal.title}</h1>
              <Rating name="size-small" defaultValue={2} size="small" />

              <p className="text-[14px] text-gray-400 mt-2">{deal.author}</p>
              <h1 className="text-xl text-[#ff6154] font-bold mt-2">
                {deal.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DealBanner;
