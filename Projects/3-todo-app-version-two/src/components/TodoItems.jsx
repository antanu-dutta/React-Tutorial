import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            key={`${item.dueDate} ${item.name}`}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
