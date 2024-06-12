import React from "react";
import Link from "next/link";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const socials = [
  { component: <CiFacebook className="text-xl" />, key: "facebook" },
  { component: <CiTwitter className="text-xl" />, key: "twitter" },
  { component: <CiInstagram className="text-xl" />, key: "instagram" },
  // { component: <FaPinterest className="text-xl" />, key: "pinterest" }
];

const Topbar = () => {
  return (
    <div className=" md:block bg-slate-900 border-b border-gray-200 ">
      <div className="px-6 container flex justify-between items-center py-3 text-gray-600">
 
        <p className="underline font-[500] text-[14px] text-white">Find a Book Store</p>
     
        <div className="flex items-center justify-center gap-4 text-white">
            {socials.map((item, i) => <div key={i} className="">{item.component}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
