import React, { useState } from "react";
import "/Users/shafiqaabdat/calculator/src/Pages/Calculator/Calculater.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
interface states {
  currentInput: string;
  prevInput: number | null;
  op: string;
}

const Calculator: React.FC = () => {
  const [state, setState] = useState<states>({
    currentInput: "0",
    prevInput: null,
    op: "0",
  });

  const clearlastinput = () => {
    if (state.currentInput === " ") {
      alert("turn on the calculator");
    } else {
      setState((prevState) => ({
        ...prevState,
        currentInput:
          prevState.currentInput.length > 1
            ? prevState.currentInput.slice(0, -1)
            : "0",
      }));
    }
  };

  const operations: { [key: string]: (a: number, b: number) => number } = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const handleInput = (value: string) => {
    if (state.currentInput === " ") {
      alert("Please turn on the calculator");
    } else {
      setState((prevState) => ({
        ...prevState,
        currentInput:
          prevState.currentInput === "0"
            ? value
            : prevState.currentInput + value,
      }));
    }
  };

  const handleOperation = (operation: string) => {
    if (state.currentInput === " ") {
      alert("Please turn on the calculator");
    } else {
      if (state.currentInput) {
        setState({
          prevInput: parseFloat(state.currentInput),
          currentInput: "0",
          op: operation,
        });
      }
    }
  };

  const calculateResult = () => {
    if (state.currentInput === " ") {
      alert("turn on the calculator");
    } else {
      if (state.op && state.prevInput !== null) {
        const current = parseFloat(state.currentInput);
        const result = operations[state.op](state.prevInput, current);
        setState({
          currentInput: result.toString(),
          prevInput: null,
          op: "0",
        });
      }
    }
  };

  const calculateroot = () => {
    if (state.currentInput === " ") {
      alert("turn on the calculator");
    } else {
      const current = Math.pow(parseFloat(state.currentInput), 0.5);
      setState({
        currentInput: current.toString(),
        prevInput: null,
        op: "0",
      });
    }
  };

  const clear = () => {
    setState({
      currentInput: "0",
      prevInput: null,
      op: "0",
    });
  };
  const PowerOff = () => {
    setState({
      currentInput: " ",
      prevInput: null,
      op: " ",
    });
  };

  return (
    <div className="calculator">
      <div className="display">{state.currentInput}</div>{" "}
      <div className="buttons">
        <button onClick={() => clear()}>AC</button>
        <button onClick={() => clearlastinput()}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <button onClick={() => calculateroot()}>√</button>
        <button onClick={() => PowerOff()}>OFF</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("+")}>+</button>
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} onClick={() => handleInput(i.toString())}>
            {i}
          </button>
        ))}
        <button onClick={() => handleInput(".")}>.</button>{" "}
        <button onClick={() => calculateResult()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
