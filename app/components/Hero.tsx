import React from "react";
import { LightBtn } from "./";
import Image from "next/image";
import heroImg from "@/public/hustle_hub_hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-32 mt-10 mx-10 lg:mx-20">
      <div className="shrink">
        <h1 className="text-4xl font-bold mb-8">Organize, Track, Achieve</h1>
        <p className="text-sm md:text-lg mb-8 leading-7">
          Transform your productivity with our powerful todo app. Whether
          it&apos;s personal projects or professional deadlines, our tool lets
          you manage, track, and prioritize effortlessly. Achieve more every
          day.
        </p>
        <LightBtn href="/login" name="Get Started" />
      </div>
      <div className="shrink-0">
        <Image src={heroImg} alt="heroImg" className="w-[25rem] sm:w-[20rem] md:w-[25rem] lg:w-[37rem] mb-10 sm:mb-0" />
      </div>
    </div>
  );
};

export default Hero;
