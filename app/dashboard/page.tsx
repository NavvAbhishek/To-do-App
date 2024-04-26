"use client"
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session }: any = useSession();
  console.log(session)
  return (
    <div className="flex justify-center items-center gap-10">
      Dashboard
      {session && <span>{session.user?.name}</span>}
      <button
        onClick={() => signOut()}
        className="w-24 mt-4 px-4 py-2 bg-pink text-white rounded-lg hover:bg-purple transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
