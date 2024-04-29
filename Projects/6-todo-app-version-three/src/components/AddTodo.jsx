import { useState } from "react";
import styles1 from "./AddTodo.module.css";
import styles2 from "./KgButtons.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    // event.target.value = "";
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
    // event.target.value = "";
  };
  const handleAddButtonCliked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className={`row ${styles2["kg-row"]}`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles2["kg-button"]}`}
            onClick={handleAddButtonCliked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
