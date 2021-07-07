import React,{useContext} from "react";
import calContext from "./contextProvider";
function ButtonContainer() {
const {clearDisplay, plusMinus, realValue, answer,oprandClick} = useContext(calContext)
  const click =(e)=>{
    let val = e.target.value
    realValue(val)
  }
  const clickOp = (e)=>{
    let val = e.target.value
    oprandClick(val)
  }

  
  return (
    <div className="ButtonContainer">
      <button  className="btn" onClick={clearDisplay} value="AC">AC</button>
      <button  className="btn" onClick={plusMinus} value="plusMinus">+/-</button>
      <button  className="btn" onClick={clickOp} value="%" >%</button>
      <button  className="btn aret" value="/" onClick={clickOp}> /</button>
      <button  className="btn" onClick={click} value="7">7</button>
      <button  className="btn" onClick={click} value="8">8</button>
      <button  className="btn" onClick={click} value="9">9</button>
      <button  className="btn aret" onClick={clickOp} value="*">*</button>
  
      <button  className="btn" onClick={click} value="4">4</button>
      <button  className="btn" onClick={click} value="5">5</button>
      <button  className="btn" onClick={click} value="6">6</button>
      <button  className="btn aret" onClick={clickOp}value="-">-</button>
      <button  className="btn" onClick={click} value="1">1</button>
      <button  className="btn" onClick={click} value="2">2</button>
      <button  className="btn" onClick={click} value="3">3</button>
      <button  className="btn aret" onClick={clickOp} value="+">+</button>
 
      <button  className="btn big" onClick={click} value="0">0</button>
      <button  className="btn" onClick={click} value=".">.</button>
      <button  className="btn aret" onClick={answer} value="=">=</button>
    </div>
  );
}

export default ButtonContainer;
