"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
} from "@/data/hero";
import RoundedButton from "../button/button";

export default function Hero() {
  const plane1 = useRef<HTMLDivElement>(null);
  const plane2 = useRef<HTMLDivElement>(null);
  const plane3 = useRef<HTMLDivElement>(null);
  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: any): void => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId === null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number): number =>
    start * (1 - amount) + target * amount;

  const animate = (): void => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    if (plane1.current)
      gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    if (plane2.current)
      gsap.set(plane2.current, {
        x: `+=${xForce * 0.5}`,
        y: `+=${yForce * 0.5}`,
      });
    if (plane3.current)
      gsap.set(plane3.current, {
        x: `+=${xForce * 0.25}`,
        y: `+=${yForce * 0.25}`,
      });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      if (requestAnimationFrameId !== null) {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    }
  };

  return (
    <main onMouseMove={manageMouseMove} className={`${styles.main}`}>
      <div ref={plane1} className={styles.plane}>
        <Image
          src={floating1} // update paths as needed
          alt="image"
          width={300}
          height={300}
        />
        <Image
          src={floating2} // update paths as needed
          alt="image"
          width={300}
          height={300}
        />
        <Image
          src={floating3} // update paths as needed
          alt="image"
          width={225}
          height={225}
        />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image
          src={floating4} // update paths as needed
          alt="image"
          width={250}
          height={250}
        />
        <Image
          src={floating5} // update paths as needed
          alt="image"
          width={200}
          height={200}
        />
        <Image
          src={floating6} // update paths as needed
          alt="image"
          width={225}
          height={225}
        />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image
          src={floating7} // update paths as needed
          alt="image"
          width={150}
          height={150}
        />
        <Image
          src={floating8} // update paths as needed
          alt="image"
          width={200}
          height={200}
        />
      </div>
      <div
        className={`${styles.title} absolute left-[50%] w-[100vw] px-[1rem] lg:px-0 lg:left-[75%] top-[40%] lg:top-[45%] flex flex-col justify-center lg:items-center text-white lg:text-center lg:w-[41rem]`}
      >
        <p className="text-[13px] text-gray-200 font-[500]">
          A SALE FOR THE PAGES
        </p>
        <h1 className="text-7xl font-bold flex w-fit text- relative">
          50% Off Hundreds <br /> Of Books
          <Image
            src="/svg/svg-line.webp"
            width={230}
            height={30}
            className="absolute top-12"
            alt="svg line"
          />
        </h1>
        <p className="text-[#ff6154] my-4 font-[600]">
          Online And In Stores Only
        </p>
        <RoundedButton className=" rounded-full w-fit">
          <div className="flex items-center font-[500] w-fit cursor-pointer text-[16px] gap-3 px-6 lg:px-10 py-3">
            Shop Now
            <RiArrowRightSLine className="text-xl" />
          </div>
        </RoundedButton>
      </div>
    </main>
  );
}
