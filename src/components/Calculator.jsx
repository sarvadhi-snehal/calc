import React,{useState} from 'react'
import ButtonContainer from './ButtonContainer';
import "./Calculator.css";
import * as Mathjs from "mathjs";

function Calculator() {
    const [calcInput,setCalcInput] = useState("");
    // const [aritOp, setArithOp] =useState("");
    const [ans,setAns] = useState("");

    const clearDisplay = () =>{
        setCalcInput("");
        setAns("")
    }
   
    const clickHandler = (dis) =>{
        setCalcInput(calcInput.concat(dis));
        
    }

    const clearLast = () =>{
        // setCalcInput(calcInput.slice(0,-1))
      if(calcInput > 0){
        setCalcInput( "-" + calcInput);
      }
      else{
        setCalcInput(calcInput * -1);
      }
        
      
        
    }

    const evol = () =>{
        setAns(Mathjs.evaluate(calcInput));
      
    }
    
    return (
        <article className="calContainer">
        
               <form className="display">
                   <input type="text" className="ans" name="result" value={ans}  />
                   <input type="text" className="val" name="inputs" value={calcInput}/>
               </form>
           
            <ButtonContainer clickButton={clickHandler}  clrDis={clearDisplay} evol={evol} clrLast={clearLast}/>
        </article>
    )
}

export default Calculator
