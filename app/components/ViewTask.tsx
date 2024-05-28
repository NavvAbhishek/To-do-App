"use client";
import moment from "moment-timezone";

type TaskData = {
  name: string;
  category: string;
  priority: string;
  date: string;
};

type ViewTaskProps = {
  todayTasks: TaskData[];
  otherTasks: TaskData[];
};

const ViewTask: React.FC<ViewTaskProps> = ({ todayTasks, otherTasks }) => {
  return (
    <div>
      <h1 className="text-pink text-2xl font-semibold">Today Tasks</h1>
      <div>
        {todayTasks.map((task, index) => (
          <div key={index} className="mt-5">
            <div className="flex gap-5 cursor-pointer bg-blue text-white p-2 rounded-md">
              <ul className="flex items-end space-x-2">
                <li>{task.name}</li>
                <li className="text-xs">{`(${task.category} , ${
                  task.priority
                } , ${moment(task.date)
                  .tz("Asia/Kolkata")
                  .format("DD MMM")})`}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-pink text-xl font-semibold mt-4">Other Tasks</h2>
      <div>
        {otherTasks.map((task, index) => (
          <div key={index} className="mt-5">
            <div className="flex gap-5 cursor-pointer bg-blue text-white p-2 rounded-md">
              <ul className="flex items-end space-x-2">
                <li>{task.name}</li>
                <li className="text-xs">{`(${task.category} , ${
                  task.priority
                } , ${moment(task.date)
                  .tz("Asia/Kolkata")
                  .format("DD MMM")})`}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTask;
