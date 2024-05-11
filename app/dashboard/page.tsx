"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { Button, DatePickerComp, Navbar } from "../components";


const Dashboard = () => {
  const [task, setTask] = useState("");
  const { data: session }: any = useSession();
  //console.log(session);

  const addTask = () => {
    console.log(task);
  };

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
      <div className="mb-4 w-[80%] mx-auto">
        <div className="flex flex-col space-y-2">
          <label htmlFor="input_field" className="text-purple font-medium">
            📝 Add Task
          </label>
          <input
            id="input_field"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="p-2 w-96 rounded-md text-blue bg-yellow focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
          />
        </div>
        <div className="w-96 mt-5">
          <p className="text-purple font-medium mb-2">📅 Pick Date</p>
         <DatePickerComp/>
        </div>
        <Button
          name="Add task"
          onClick={addTask}
          className="mt-5 py-[0.4rem] px-3"
        />
      </div>
    </div>
  );
};

export default Dashboard;
