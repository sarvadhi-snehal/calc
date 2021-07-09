import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import "./Calculator.css";

// context
import CalContext from "./contextProvider";

function Calculator() {
  const [curState, setCurState] = useState("0");
  const [prevState, setPrevState] = useState("");
  const [op, setOp] = useState("");

  //reset Display
  const clearDisplay = () => {
    setCurState("0");
  };

  //making postive nagative
  const plusMinus = () => {
    if (curState !== "") {
      if (curState.charAt(0) === "-") {
        setCurState(curState.replace("-", ""));
      } else {
        setCurState("-" + curState);
      }
    } else {
      if (prevState.charAt(0) === "-") {
        setPrevState(prevState.replace("-", ""));
      } else {
        setPrevState("-" + prevState);
      }
    }
  };

  //calucte ansewr
  const answer = () => {
    let valFirst = parseFloat(prevState);
    let valSecond = parseFloat(curState);

    let cal;
    if (curState === "") return;
    switch (op) {
      case "+":
        cal = valFirst + valSecond;
        break;
      case "-":
        cal = valFirst - valSecond;
        break;
      case "/":
        cal = valFirst / valSecond;
        break;
      case "*":
        cal = valFirst * valSecond;
        break;
      case "%":
        cal = valFirst % valSecond;
        break;
      default:
        return;
    }

    let ans = cal.toString();
    if (ans.includes(".")) {
      let periodIndex = ans.indexOf(".");
      ans = ans.slice(0, periodIndex + 3);
    }

    setPrevState(ans);
    setCurState("");
    setOp("");
  };

  //geting operator
  const clickOprator = (val) => {
    setOp(val);
    if (curState === "") return;

    setPrevState(curState);
    setCurState("");
  };

  //geting input
  const clickNum = (val) => {
    if (curState.includes(".") && val === ".") return;

    if (curState.charAt(0) === "0" && curState.length === 1) {
      if (val === ".") {
        setCurState("0");
      } else {
        setCurState("");
      }
    }

    if (curState === "" && val === ".") {
      setCurState("0");
    }

    setCurState((pre) => pre.concat(val));
  };

  return (
    <CalContext.Provider
      value={{ clearDisplay, plusMinus, answer, clickOprator, clickNum }}
    >
      <article className="calContainer">
        <div className="display">
          {curState !== "" ? (
            <input className="val" type="text" value={curState} readOnly />
          ) : (
            <input className="val" type="text" value={prevState} readOnly />
          )}
          <ButtonContainer />
        </div>
      </article>
    </CalContext.Provider>
  );
}

export default Calculator;
