'use client'
import React from "react";
import RoundedButton from "../button/button";
import { RiArrowRightSLine } from "react-icons/ri";
import { TagProps } from "@/types";
const Tag: React.FC<TagProps> = ({ title, link }) => {
  return (
    <div className="max-w-[70rem] gap-4 mx-auto flex items-center">
      <h1 className="text-3xl font-bold text-slate-700">{title}</h1>
      <hr className="flex-1" />
      <RoundedButton className=" rounded-full group">
        <div className="flex items-center font-[500] text-[#ff6154] group-hover:text-white cursor-pointer text-[16px] gap-3 px-6 py-2">
          View All
          <RiArrowRightSLine className="text-xl" />
        </div>
      </RoundedButton>
    </div>
  );
};

export default Tag;
