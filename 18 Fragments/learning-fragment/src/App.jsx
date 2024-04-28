import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItem = ["Sabji", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // const [text, setText] = useState("Food Items Entered by user");
  const [foodItem, setFoodItem] = useState([]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setFoodItem([...foodItem, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        <ErrorMessage items={foodItem} />
        <FoodItems items={foodItem}></FoodItems>
      </Container>
    </>
  );
}

export default App;
