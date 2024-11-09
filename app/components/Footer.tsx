import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-center py-10">
        Design and Developed by{" "}
        <Link href="https://www.linkedin.com/in/navabhishek/" className="text-purple dark:text-pink font-semibold">
          {" "}
          Navindu Abhishek
        </Link>{" "}
        with 💜
      </p>
    </div>
  );
};

export default Footer;
