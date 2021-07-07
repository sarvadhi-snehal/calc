import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import "./Calculator.css";

// context
import CalContext from "./contextProvider";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");
  const [opration, setOpration] = useState("");
  const [first, setFirst] = useState("");
  const clearDisplay = () => {
    setDisplayValue("");
  };
  let op = ["/", "%", "*", "-", "+"];

  const plusMinus = () => {
    if (displayValue > 0) {
      setDisplayValue("-" + displayValue);
    } else {
      setDisplayValue(displayValue * -1);
    }
  };

  const realValue = (val) => {
    setDisplayValue([...displayValue, val].join(""));
  };

  const oprandClick = (val) => {};

  const answer = (val) => {
    setDisplayValue(eval(displayValue));
  };
  return (
    <CalContext.Provider
      value={{ clearDisplay, plusMinus, realValue, answer, oprandClick }}
    >
      <article className="calContainer">
        <div className="display">
          <input
            type="text"
            className="val"
            name="inputs"
            value={displayValue}
            readOnly
          />
          <ButtonContainer />
        </div>
      </article>
    </CalContext.Provider>
  );
}

export default Calculator;
