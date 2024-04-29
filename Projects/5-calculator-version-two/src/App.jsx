import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  const [currValue, setCurrValue] = useState("");
  const handleButton = (event) => {
    let newDisplayValue = currValue + event.target.innerText;
    setCurrValue(newDisplayValue);
    if (event.target.innerText === "C") {
      setCurrValue("");
    }
    if (event.target.innerText === "=") {
      setCurrValue(eval(currValue));
    }
  };
  return (
    <>
      <div id={styles.calculator}>
        <Display currValue={currValue} />
        <ButtonContainer handleButton={handleButton} />
      </div>
    </>
  );
}

export default App;
