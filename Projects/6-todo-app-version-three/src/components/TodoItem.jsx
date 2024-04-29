import styles from "./KgButtons.module.css";
import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, handleDeleteItem }) {
  return (
    <div className="container">
      <div className={`row ${styles["kg-row"]}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            onClick={() => handleDeleteItem(todoName)}
            type="button"
            className={`btn btn-danger ${styles["kg-button"]}`}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
