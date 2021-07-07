import React from "react";
function ButtonContainer({clickButton, clrDis, evol, clrLast}) {
 const click = (e) =>{
   let dis =e.target.value;
    clickButton(dis);
 }
 const pn = (e) =>{
   clrLast();
 }
 const ans = (dis) =>{
  evol(dis)
 }
  // const btns = ["AC","C",   9,8,7,6,5,4,3,2,1,0,"."];
  return (
    <div className="ButtonContainer">
      <button  className="btn" onClick={clrDis} value="AC">AC</button>
      <button  className="btn" onClick={pn} value="C">+/-</button>
      <button  className="btn" onClick={click} value="%" >%</button>
      <button  className="btn aret" value="/" onClick={click}> /</button>
      <button  className="btn" onClick={click} value="7">7</button>
      <button  className="btn" onClick={click} value="8">8</button>
      <button  className="btn" onClick={click} value="9">9</button>
      <button  className="btn aret" onClick={click} value="*">*</button>
  
      <button  className="btn" onClick={click} value="4">4</button>
      <button  className="btn" onClick={click} value="5">5</button>
      <button  className="btn" onClick={click} value="6">6</button>
      <button  className="btn aret" onClick={click}value="-">-</button>
      <button  className="btn" onClick={click} value="1">1</button>
      <button  className="btn" onClick={click} value="2">2</button>
      <button  className="btn" onClick={click} value="3">3</button>
      <button  className="btn aret" onClick={click} value="+">+</button>
 
      <button  className="btn big" onClick={click} value="0">0</button>
      <button  className="btn" onClick={click} value=".">.</button>
      <button  className="btn aret" onClick={ans} value="=">=</button>
    </div>
  );
}

export default ButtonContainer;
