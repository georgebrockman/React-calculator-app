import React, { useState } from 'react';
import './App.css';
import ResultComponent from './Components/ResultComponent';
import KeyPadComponent from './Components/KeyPadComponent';

// what is super()
// why are we not using const before calculate, reset and backspace
// interesting that triple = is used

const App = () => {
  const [result, setResult] = useState("");

  const onClick = (button) => {
    if(button === "="){
      calculate()
    }
    else if(button === "C"){
      reset()
    }
    else if(button === "CE"){
      backspace()
    }
    else {
      setResult(result + button)
    }
  };

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "")
    } catch (e) {
      setResult("error")
    }
  };

  const reset = () => {
    setResult("")
  };

  const backspace = () => {
    setResult(result.slice(0,-1))
  };

  return (
    <div>
      <div className="calculator-body">
        <h1> Simple Calculator </h1>
        <ResultComponent result={result}/>
        <KeyPadComponent onClick={onClick}/>
      </div>
    </div>
  );
}


export default App;
