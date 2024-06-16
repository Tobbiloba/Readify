import React from "react";
import Tag from "@/components/tag/tag";
import TrendingCarouse from "./trending-carousel";
const Trending = () => {
  return (
    <div className="mt-20  h-fit px-[1rem] bg-red-00">
      <Tag title="What's In Trend" link="/" />
      <TrendingCarouse />
    </div>
  );
};
export default Trending;
