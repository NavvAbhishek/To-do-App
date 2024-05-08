import Image from "next/image";
import React from "react";
import logo from "@/public/logo_removebg.png";
import Link from "next/link";
import { LightBtn } from "./Buttons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About Us" },
];

const Navbar = () => {
  return (
    <nav className="bg-black ">
      <div className="flex items-center justify-between w-[90%] md:w-[80%] mx-auto">
        <div className="flex items-center">
          <Image src={logo} alt="logo" className="w-32" />
          <h1 className="text-pink text-2xl font-bold">Hustle Hub</h1>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index} className="text-pink">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <LightBtn href='/login' name="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
