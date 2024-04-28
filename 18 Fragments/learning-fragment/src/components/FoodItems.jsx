import Item from "./Item";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item foodItem={item} key={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
