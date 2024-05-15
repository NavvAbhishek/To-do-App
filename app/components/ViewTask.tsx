"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";

type TaskData = {
  name: string;
  category: string;
  priority: string;
  date: string;
};

const ViewTask = () => {
  const [todayTasks, setTodayTasks] = useState<TaskData[]>([]);
  const [otherTasks, setOtherTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    const getTaskData = async () => {
      try {
        const res = await axios.get("/api/get-tasks");
        if (Array.isArray(res.data.data)) {
          const today = moment().tz("Asia/Kolkata").startOf("day");
          const todayTasksTemp: TaskData[] = [];
          const otherTasksTemp: TaskData[] = [];

          res.data.data.forEach((task: any) => {
            const taskDate = moment(task.date)
              .tz("Asia/Kolkata")
              .startOf("day"); // Task's date in GMT+5:30
            if (taskDate.isSame(today)) {
              todayTasksTemp.push(task);
            } else {
              otherTasksTemp.push(task);
            }
          });

          setTodayTasks(todayTasksTemp);
          setOtherTasks(otherTasksTemp); // Sort if needed
        } else {
          console.error("Data is not an array", res.data);
        }
      } catch (error: any) {
        console.error(error.message);
      }
    };
    getTaskData();
  }, []);

  return (
    <div>
      <h1 className="text-pink text-2xl font-semibold">Tasks for Today</h1>
      <div>
        {todayTasks.map((task, index) => (
          <div key={index} className="flex gap-5">
            <h3>
              {moment(task.date).tz("Asia/Kolkata").format("DD MMM YYYY")}
            </h3>
            <h3>{task.name}</h3>
            <h3>{task.category}</h3>
            <h3>{task.priority}</h3>
          </div>
        ))}
      </div>
      <h2 className="text-pink text-xl font-semibold mt-4">Other Tasks</h2>
      <div>
        {otherTasks.map((task, index) => (
          <div key={index} className="flex gap-5">
            <h3>
              {moment(task.date).tz("Asia/Kolkata").format("DD MMM YYYY")}
            </h3>
            <h3>{task.name}</h3>
            <h3>{task.category}</h3>
            <h3>{task.priority}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTask;
