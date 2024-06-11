import React from "react";
import Link from "next/link";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const socials = [
    <CiFacebook className="text-xl"/>,
    <CiTwitter className="text-xl"/>,
    <CiInstagram className="text-xl"/>,
    // <FaPinterest className="text-xl"/>
]
const Topbar = () => {
  return (
    <div className=" md:block bg-slate-900 border-b border-gray-200 ">
      <div className="px-6 container flex justify-between items-center py-3 text-gray-600">
        {/* <a
          href="mailto:official@bitshub.co"
          target="_blank"
          rel="noreferrer"
          className="text-sm hover:text-primary transition"
        >
          official@bitshub.co
        </a> */}
        <p className="underline font-[500] text-[14px] text-white">Find a Book Store</p>
        {/* <div className="flex items-center justify-center gap-8">
          <a
            href="/login?redirect=/dashboard"
            rel="noopener noreferrer external"
            className="text-sm hover:text-primary transition"
          >
            Become a vendor
          </a>
          <Link
            href="/track-order"
            className="text-sm hover:text-primary transition"
          >
            Track my order
          </Link>
          <p className="text-sm hover:text-primary transition">
            <span className="text-sm pr-1">
              <i className="fas fa-phone"></i>
            </span>
            call: 08103431851
          </p>
        </div> */}
        <div className="flex items-center justify-center gap-4 text-white">
            {socials.map((item, i) => <div key={i} className="">{item}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
