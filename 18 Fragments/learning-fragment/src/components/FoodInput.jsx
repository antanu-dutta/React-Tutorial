import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <div
        style={{ paddingInline: 0 }}
        className={`input-group flex-nowrap ${styles.input}`}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter food item here"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default FoodInput;
