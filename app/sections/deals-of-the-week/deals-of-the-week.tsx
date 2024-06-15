import React from "react";
import Tag from "@/components/tag/tag";
import DealBanner from "./deal-banner";
const DealOfTheWeek = () => {
  return (
    <div className="">
      <Tag title="Deals Of The Week" link="/" />
      <DealBanner />
    </div>
  );
};

export default DealOfTheWeek;
