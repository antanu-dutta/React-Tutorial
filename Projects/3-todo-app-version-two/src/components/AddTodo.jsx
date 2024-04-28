import styles1 from "./AddTodo.module.css";
import styles2 from "./KgButtons.module.css";
function AddTodo() {
  return (
    <div className="container text-center">
      <div className={`row ${styles2["kg-row"]}`}>
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles2["kg-button"]}`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
