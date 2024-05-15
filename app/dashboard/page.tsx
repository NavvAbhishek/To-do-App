"use client";
import React, { useState } from "react";
import { Button, Navbar, ViewTask } from "../components";
import axios from "axios";

const Dashboard = () => {
  const [taskDetails, setTaskDetails] = useState({
    name: "",
    date: "",
    priority: "",
    category:""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.preventDefault();
    try {
      console.log("Sending task data:", taskDetails);
      const response = await axios.post("/api/create-task", taskDetails);
      console.log("Task Data addedd successfully", response.data);
      // Reset the form here
      setTaskDetails({
        name: '',
        date: '',
        priority: '',
        category: ''
      });
    } catch (error: any) {
      console.log(
        "const response = await axios.post(/api/create-class, classData);"
      );
      console.log("Class Data addedd failed", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center gap-10 bg-yellow-200 py-5">
        <button
          className="w-24 px-4 py-2 bg-pink text-white rounded-lg hover:bg-purple transition-colors"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-evenly">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="input_field" className="text-purple font-medium">
            📝 Add Task
          </label>
          <input
            id="input_field"
            type="text"
            value={taskDetails.name}
            onChange={(e) =>
              setTaskDetails({ ...taskDetails, name: e.target.value })
            }
            className="p-2 w-96 rounded-md text-blue bg-yellow focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="date" className="text-purple font-medium mb-2">
            📅 Pick Date
          </label>
          <input
            className="p-2 w-96 rounded-md bg-yellow focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
            type="date"
            id="date"
            value={taskDetails.date}
            onChange={(e) =>
              setTaskDetails({ ...taskDetails, date: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="priority_select" className="text-purple font-medium">
            📊 Set Priority
          </label>
          <select
            id="priority-select"
            value={taskDetails.priority}
            onChange={(e) =>
              setTaskDetails({ ...taskDetails, priority: e.target.value })
            }
            className="p-2 w-96 mt-2 rounded-md bg-yellow focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="priority_select" className="text-purple font-medium">
          🗂️ Category
          </label>
          <select
            id="priority-select"
            value={taskDetails.category}
            onChange={(e) =>
              setTaskDetails({ ...taskDetails, category: e.target.value })
            }
            className="p-2 w-96 mt-2 rounded-md bg-yellow focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
          >
            <option value="personal">personal</option>
            <option value="work">work</option>
            <option value="home">home</option>
            <option value="education">education</option>
            <option value="health">health</option>
          </select>
        </div>
        <Button name="Add task" className="mt-5 py-[0.6rem] px-3" />
      </form>
      <ViewTask/>
      </div>
    </div>
  );
};

export default Dashboard;