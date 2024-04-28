import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItem = ["Sabji", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="food-heading">
        Healthy Food
      </h1>
      <ErrorMessage items={foodItem} />
      <FoodItems items={foodItem}></FoodItems>
    </>
  );
}

export default App;
