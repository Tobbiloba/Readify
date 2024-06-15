"use client";
import React from "react";
import RoundedButton from "../button/button";
import { RiArrowRightSLine } from "react-icons/ri";
import { TagProps } from "@/types";
const Tag: React.FC<TagProps> = ({ title, link }) => {
  return (
    <main className="max-w-[70rem] relative mb-20 lg:mb-4 lg:h-20 gap-4 mx-auto px-[1rem] lg:px-0 lg:flex w-[100%] lg:items-center mt-10 lg:mt-20">
      <h1 className="text-3xl font-bold text-slate-700">{title}</h1>
      <hr className="flex-1 my-5 lg:my-0" />
      <RoundedButton className=" rounded-full group w-fit">
        <div className="flex items-center font-[500] w-fit text-[#ff6154] group-hover:text-white cursor-pointer text-[16px] gap-3 px-6 py-2">
          View All
          <RiArrowRightSLine className="text-xl" />
        </div>
      </RoundedButton>
    </main>
  );
};

export default Tag;
