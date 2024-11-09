import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-auto dark:bg-black">
      <p className="text-center py-10">
        Design and Developed by{" "}
        <Link href="https://www.linkedin.com/in/navabhishek/" className="text-purple dark:text-pink font-semibold">
          {" "}
          Navindu Abhishek
        </Link>{" "}
        with 💜
      </p>
    </footer>
  );
};

export default Footer;
