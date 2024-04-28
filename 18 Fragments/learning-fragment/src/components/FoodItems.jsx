import Item from "./Item";
const FoodItems = ({ items }) => {
  // const handleBuyClicked = (event) => {
  //   console.log(`${item} is being bought`);
  // };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          foodItem={item}
          key={item}
          handleBuyClicked={(event) => console.log(`${item} is being bought`)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
