"use client"
import React, { useState } from "react";
import { Button, FormInput, FormSelect } from "../index";
import axios from "axios";

interface TaskDetails {
  name: string;
  date: string;
  priority: string;
  category: string;
}

interface TaskFormProps {
  onSubmit: (taskDetails: TaskDetails) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [taskDetails, setTaskDetails] = useState<TaskDetails>({
      name: '',
      date: '',
      priority: '',
      category: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setTaskDetails((prev) => ({ ...prev, [id]: value }));
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      <form className="mb-4 w-[80%] mx-auto" onSubmit={handleSubmit}>
        <FormInput
          id="name"
          label="📝 Add Task"
          type="text"
          value={taskDetails.name}
          onChange={handleChange}
        />
        <FormInput
          id="date"
          label="📅 Pick Date"
          type="date"
          value={taskDetails.date}
          onChange={handleChange}
        />
        <FormSelect
          id="priority"
          label="📊 Set Priority"
          value={taskDetails.priority}
          options={['low', 'medium', 'high']}
          onChange={handleChange}
        />
        <FormSelect
          id="category"
          label="🗂️ Category"
          value={taskDetails.category}
          options={['personal', 'work', 'home', 'education', 'health']}
          onChange={handleChange}
        />
        <Button name="Add task" className="mt-5 py-[0.6rem] px-3" />
      </form>
    );
  };
  
  export default TaskForm;