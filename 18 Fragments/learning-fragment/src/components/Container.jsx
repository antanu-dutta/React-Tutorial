import styles from "./Container.module.css";
const Container = ({ children }) => {
  return (
    <div className={`${styles["my-Container"]} container`}>{children}</div>
  );
};
export default Container;
