"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo_removebg.png";
import Link from "next/link";
import { LightBtn } from "./";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import useAOS from "@/utils/aosSetup";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About Us" },
];

const Navbar = () => {
  useAOS();
  const [mobileMenu, setMobileMenu] = useState(true);
  console.log(mobileMenu);
  return (
    <nav>
      <div className="bg-black ">
        <div className="flex items-center justify-between w-[95%] md:w-[80%] mx-auto">
          <div className="flex items-center">
            <Image src={logo} alt="logo" className="w-32" />
            <h1 className="text-pink text-2xl font-bold">Hustle Hub</h1>
          </div>
          <div className="hidden sm:block">
            <ul className="flex justify-center items-center gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-pink transition hover:scale-110"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="hidden sm:block">
              <LightBtn href="/login" name="Login" />
            </div>
            <div className="block sm:hidden">
              {!mobileMenu && (
                <RiMenu3Fill
                  className="text-pink text-3xl cursor-pointer"
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              )}
              {mobileMenu && (
                <RiCloseLargeFill
                  className="text-pink text-3xl cursor-pointer"
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div
          data-aos="fade-down"
          className="bg-black block sm:hidden"
          style={{ transform: "translateY(0px)" }}
        >
          <ul className="flex flex-col gap-5 ml-5">
            {navItems.map((item, index) => (
              <li key={index} className="text-pink hover:scale-110 hover:ml-5">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <LightBtn
            href="/login"
            name="Login"
            className="ml-5 mb-5 mt-5 py-[10px] px-[15px]"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
