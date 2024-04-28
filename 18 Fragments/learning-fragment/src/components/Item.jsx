import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyClicked }) => {
  return (
    <>
      <li className={`list-group-item ${styles["kg-item"]}`}>
        <span className={`${styles["kg-span"]}`}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-primary`}
          onClick={handleBuyClicked}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
