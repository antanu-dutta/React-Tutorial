import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, handleDeleteItem }) => {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            key={`${item.dueDate} ${item.name}`}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
