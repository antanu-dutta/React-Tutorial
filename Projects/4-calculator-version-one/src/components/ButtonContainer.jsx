import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div id={styles["button-container"]}>
      {buttonNames.map((button) => (
        <button className={styles.button}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
