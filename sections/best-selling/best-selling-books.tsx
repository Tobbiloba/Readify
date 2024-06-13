import React from "react";
import Tag from "@/components/tag/tag";
import BestSellingBookCarousel from './best-selling-carousel'
const BestSellingBooks = () => {
  return (
    <div className="mt-20 pt-20 h-fit px-[1rem] bg-red-00">
      <Tag title="Bestselling books" link="/" />
      <BestSellingBookCarousel />
    </div>
  );
};
export default BestSellingBooks;
