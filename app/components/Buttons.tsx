import Link from "next/link";
import React from "react";

interface btnProps {
  name: string;
  href: string;
  className?: string;
}

const Button: React.FC<btnProps> = ({ name, href, className }) => {
  return (
    <button className={`dark:text-black text-blue font-semibold bg-yellow dark:bg-pink py-3 px-4 rounded-lg ${className}`}>
       <Link href={href}>{name}</Link>
    </button>
  );
};

export { Button };
