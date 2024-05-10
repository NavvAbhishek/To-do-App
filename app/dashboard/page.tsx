"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Navbar } from "../components";

const Dashboard = () => {
  const { data: session }: any = useSession();
  console.log(session);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center gap-10 bg-yellow-200 py-5">
        {session && <span>{session.user?.name}</span>}
        {session && session.user?.image && (
          <Image
            className="rounded-full"
            src={session.user.image}
            alt={session.user.name}
            width={40}
            height={40}
          />
        )}
        <button
          onClick={() => signOut()}
          className="w-24 px-4 py-2 bg-pink text-white rounded-lg hover:bg-purple transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
