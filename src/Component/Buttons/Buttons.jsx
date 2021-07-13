import React,{useContext} from "react";
import Button from "../Button/Button";
import './Buttons.scss'
import CalcContext from '../../GlobalContext'
function Buttons() {
  const dispatch = useContext(CalcContext);
  const handleClick = (e) =>{
    let num = e.target.value;
    dispatch({ type: "numInput",  payload : num })

  }

  const  handleOpClick = (e) =>{
    let op = e.target.value;
    dispatch({ type: "op", payload : op })
  }
  return (
    <section className="buttonsContainer">
      <Button className={"btn"} onClick={()=>dispatch({type: "clear"})} number={"ac"} />
      <Button className={"btn"} onClick={()=>dispatch({type: "plusMinus"})} number={"+/-"} />
      <Button className={"btn"} onClick={handleOpClick} number={"%"} />
      <Button className={"btn"} onClick={handleOpClick} number={"/"} />
      <Button className={"btn"} onClick={handleClick} number={"7"} />
      <Button className={"btn"} onClick={handleClick} number={"8"} />
      <Button className={"btn"} onClick={handleClick} number={"9"} />
      <Button className={"btn"} onClick={handleOpClick} number={"*"} />
      <Button className={"btn"} onClick={handleClick} number={"4"} />
      <Button className={"btn"} onClick={handleClick} number={"5"} />
      <Button className={"btn"} onClick={handleClick} number={"6"} />
      <Button className={"btn"} onClick={handleOpClick} number={"-"} />
      <Button className={"btn"} onClick={handleClick} number={"1"} />
      <Button className={"btn"} onClick={handleClick} number={"2"} />
      <Button className={"btn"} onClick={handleClick} number={"3"} />
      <Button className={"btn"} onClick={handleOpClick} number={"+"} />
      <Button className={"btn span"} onClick={handleClick}  number={"0"} />
      <Button className={"btn"} onClick={handleClick} number={"."} />
      <Button className={"btn"} onClick={()=>dispatch({type: "answer"})} number={"="} />
    </section>
  );
}

export default Buttons;
