import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems([...todoItems, { name: itemName, dueDate: itemDueDate }]);
  };
  const handleDeleteItem = (toodItem) => {
    const newTodoItems = todoItems.filter((item) => item.name !== toodItem);
    setTodoItems(newTodoItems);
    console.log(`item Deleted : ${toodItem}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMsg todoItems={todoItems}></WelcomeMsg>
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
