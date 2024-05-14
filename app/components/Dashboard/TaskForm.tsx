import React, { useState } from "react";
import { Button, FormInput, FormSelect } from "../index";

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
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(taskDetails);
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