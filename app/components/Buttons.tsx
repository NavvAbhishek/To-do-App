import Link from "next/link";
import React from "react";

interface btnProps {
  name: string;
  href: string;
  className?: string;
}

const LightBtn: React.FC<btnProps> = ({ name, href, className }) => {
  return (
    <button className={`text-blue font-semibold bg-pink py-3 px-4 rounded-lg ${className}`}>
       <Link href={href}>{name}</Link>
    </button>
  );
};

const DarkBtn: React.FC<btnProps> = ({ name, href, className }) => {
  return (
    <button className={`text-pink font-semibold bg-blue py-3 px-4 rounded-lg ${className}`}>
      <Link href={href}>{name}</Link>
    </button>
  );
};

export { LightBtn, DarkBtn };
