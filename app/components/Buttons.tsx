import Link from "next/link";
import React from "react";

interface btnProps {
  name: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<btnProps> = ({ name, href, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`dark:text-black text-blue font-semibold text-sm bg-yellow dark:bg-pink py-3 px-4 rounded-lg ${className}`}
    >
      {href ? <Link href={href}>{name}</Link> : name}
    </button>
  );
};

export default Button ;
