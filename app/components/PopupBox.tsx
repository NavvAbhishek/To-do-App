import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React from "react";
import { MdClose } from "react-icons/md";

type PopupBoxProps = {
  task: {
    _id: string;
    name: string;
    category: string;
    priority: string;
    date: string;
  };
  onClose: () => void;
};

const PopupBox: React.FC<PopupBoxProps> = ({ task, onClose }) => {
  const [formData, setFormData] = React.useState(task);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Updated task data:", formData);
    onClose();
  };

  return (
    <Popup open={true} closeOnDocumentClick onClose={onClose}>
      <div className="modal custom-popup">
        <button className="close" onClick={onClose}>
          <MdClose />
        </button>
        <div className="header">Edit Task</div>
        <div className="content">
          <label>
          📝 Task Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
          🗂️ Category:
            <select
              name="priority"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="Personal">personal</option>
              <option value="Work">work</option>
              <option value="Home">home</option>
              <option value="Education">education</option>
              <option value="Health">health</option>
            </select>
          </label>
          <label>
          📊 Priority:
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
          <label>
          📅 Date:
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Popup>
  );
};

export default PopupBox;
