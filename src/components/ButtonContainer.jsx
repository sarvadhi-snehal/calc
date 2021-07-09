import React, { useContext } from "react";
import calContext from "./contextProvider";
function ButtonContainer() {
  const { clearDisplay, plusMinus, clickNum, answer, clickOprator } = useContext(calContext);

  return (
    <div className="ButtonContainer">
      <button className="btn" onClick={clearDisplay} value="AC">
        AC
      </button>
      <button className="btn" onClick={plusMinus} value="plusMinus">
        +/-
      </button>
      <button className="btn" onClick={(e)=>clickOprator(e.target.value)} value="%">
        %
      </button>
      <button className="btn aret" value="/" onClick={(e)=>clickOprator(e.target.value)}>
        
        /
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="7">
        7
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="8">
        8
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="9">
        9
      </button>
      <button className="btn aret" onClick={(e)=>clickOprator(e.target.value)} value="*">
        *
      </button>

      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="4">
        4
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="5">
        5
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="6">
        6
      </button>
      <button className="btn aret" onClick={(e)=>clickOprator(e.target.value)} value="-">
        -
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="1">
        1
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="2">
        2
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value="3">
        3
      </button>
      <button className="btn aret" onClick={(e)=>clickOprator(e.target.value)} value="+">
        +
      </button>

      <button className="btn big" onClick={(e) => clickNum(e.target.value)} value="0">
        0
      </button>
      <button className="btn" onClick={(e) => clickNum(e.target.value)} value=".">
        .
      </button>
      <button className="btn aret" onClick={answer} value="=">
        =
      </button>
    </div>
  );
}

export default ButtonContainer;
