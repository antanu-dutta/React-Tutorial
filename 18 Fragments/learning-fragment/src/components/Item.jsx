import { useState } from "react";
import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  const [curStyle, setCurStyle] = useState(
    `list-group-item ${styles["kg-item"]}`
  );
  const [buttonText, setButtonText] = useState("Buy");
  const handleBuyClicked = (event) => {
    if (buttonText === "Buy") {
      console.log(`${foodItem} is being bought`);
      setCurStyle(`list-group-item ${styles["kg-item"]} ${styles["bg-color"]}`);
      setButtonText("Remove");
    } else {
      console.log(`${foodItem} is removed`);
      setCurStyle(`list-group-item ${styles["kg-item"]}`);
      setButtonText("Buy");
    }
  };
  return (
    <>
      <li className={curStyle}>
        <span className={`${styles["kg-span"]}`}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-primary`}
          onClick={handleBuyClicked}
        >
          {buttonText}
        </button>
      </li>
    </>
  );
};

export default Item;
