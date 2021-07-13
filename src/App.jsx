import React, { useReducer } from 'react'
import logo from './logo.svg'
import './App.scss'
import Buttons from './Component/Buttons/Buttons';
import Display from './Component/Display/Display';
import {initialState,reducer} from './reducer';
import {CalcContextProvider} from './GlobalContext'
function App() {
const [state,dispatch] = useReducer(reducer,initialState)  

  return (
  <CalcContextProvider value={dispatch}>
 <div className="App">
   {  state.input === "" ?
       <Display value={state.val1}/> 
       :
      <Display value={state.input}/>
    }
      <Buttons  />
      </div>

  </CalcContextProvider>
   


  )
}

export default App
