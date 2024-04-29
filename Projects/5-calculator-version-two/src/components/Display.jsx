import styles from "./Display.module.css";
const Display = ({ currValue }) => {
  return <input type="text" id={styles.display} readOnly value={currValue} />;
};

export default Display;
