"use client";
import moment from "moment-timezone";
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import toast from "react-hot-toast";

type TaskData = {
  _id: string;
  name: string;
  category: string;
  priority: string;
  date: string;
};

type ViewTaskProps = {
  todayTasks: TaskData[];
  otherTasks: TaskData[];
  setTodayTasks: React.Dispatch<React.SetStateAction<TaskData[]>>;
  setOtherTasks: React.Dispatch<React.SetStateAction<TaskData[]>>;
};

const ViewTask: React.FC<ViewTaskProps> = ({
  todayTasks,
  otherTasks,
  setTodayTasks,
  setOtherTasks,
}) => {
  const handleDeleteTask = async (taskId: string) => {
    try {
      const res = await axios.delete(`/api/delete-task?id=${taskId}`);
      console.log(res.data.message);
      toast.success("Class deleted successfully");

      const updatedTodayTaskData = todayTasks.filter(
        (task) => task._id !== taskId
      );
      const updatedOtherTaskData = otherTasks.filter(
        (task) => task._id !== taskId
      );
      setTodayTasks(updatedTodayTaskData);
      setOtherTasks(updatedOtherTaskData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete task");
    }
  };

  // Sort tasks by priority

  const priorityOrder: { [key: string]: number } = {
    high: 1,
    medium: 2,
    low: 3,
  };

  const sortedTodayTasks = [...todayTasks].sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  const sortedOtherTasks = [...otherTasks].sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="flex justify-center items-start gap-10">
      <div>
        <h1 className="text-pink text-2xl font-semibold">Today Tasks</h1>
        {sortedTodayTasks.map((task, index) => (
          <div key={index} className="mt-5">
            <div className="flex gap-5 cursor-pointer bg-blue text-white p-2 rounded-md">
              <ul className="flex items-end space-x-2">
                <li>{task.name}</li>
                <li>
                  <MdDelete
                    onClick={() => handleDeleteTask(task._id)}
                    className="w-5 h-5"
                  />
                </li>
                <a
                  data-tooltip-id={`tooltip-${index}`}
                  data-tooltip-html={`(${task.category}, ${
                    task.priority
                  }, ${moment(task.date).tz("Asia/Kolkata").format("DD MMM")})`}
                >
                  <li>
                    <IoEye className="w-5 h-5" />
                  </li>
                </a>
                <Tooltip
                  id={`tooltip-${index}`}
                  style={{
                    backgroundColor: "#FFC000",
                    color: "#000000",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-pink text-2xl font-semibold">Other Tasks</h2>
        {sortedOtherTasks.map((task, index) => (
          <div key={index} className="mt-5">
            <div className="flex gap-5 cursor-pointer bg-blue text-white p-2 rounded-md">
              <ul className="flex items-end space-x-2">
                <li>{task.name}</li>
                <li>
                  <MdDelete
                    onClick={() => handleDeleteTask(task._id)}
                    className="w-5 h-5"
                  />
                </li>
                <a
                  data-tooltip-id={`tooltip-${index}`}
                  data-tooltip-html={`(${task.category}, ${
                    task.priority
                  }, ${moment(task.date).tz("Asia/Kolkata").format("DD MMM")})`}
                >
                  <li>
                    <IoEye className="w-5 h-5" />
                  </li>
                </a>
                <Tooltip
                  id={`tooltip-${index}`}
                  style={{
                    backgroundColor: "#FFC000",
                    color: "#000000",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTask;
