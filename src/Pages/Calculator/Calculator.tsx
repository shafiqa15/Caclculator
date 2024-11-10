import React, { useState, useEffect } from "react";
import "/Users/shafiqaabdat/calculator/src/Pages/Calculator/Calculater.css";
import Lcd from "/Users/shafiqaabdat/calculator/src/Components/LCD/Lcd";
import CalculatorButtons from "../../Components/Buttons/CalculatorButtons";

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

  const operations: { [key: string]: (a: number, b: number) => number } = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (!isNaN(Number(key))) {
        handleInput(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        handleOperation(key);
      } else if (key === "Enter") {
        event.preventDefault();
        calculateResult();
      } else if (key === "Backspace") {
        clearlastinput();
      } else if (key === "Escape") {
        clear();
      } else if (key === "%") {
        handlePercentage();
      } else if (key === "r") {
        calculateroot();
      } else if (key === "p") {
        handlePosNeg();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state]);

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

  const handlePosNeg = () => {
    if (state.currentInput === " ") {
      alert("turn on the calculator");
    } else {
      const current = -1 * parseFloat(state.currentInput);
      setState({
        currentInput: current.toString(),
        prevInput: null,
        op: "0",
      });
    }
  };

  let falg: boolean = false;

  const clear = () => {
    falg = true;
    setState({
      currentInput: "0",
      prevInput: null,
      op: "0",
    });
  };

  const PowerOff = () => {
    falg = false;
    setState({
      currentInput: " ",
      prevInput: null,
      op: " ",
    });
  };

  const handlePercentage = () => {
    if (state.currentInput === " ") {
      alert("turn on the calculator");
    } else {
      const current = (1 / 100) * parseFloat(state.currentInput);
      setState({
        currentInput: current.toString(),
        prevInput: null,
        op: "0",
      });
    }
  };

  return (
    <div className="calculator">
      <Lcd currentInput={state.currentInput} />
      <CalculatorButtons
        onClear={clear}
        onClearLastInput={clearlastinput}
        onCalculateRoot={calculateroot}
        onPowerOff={PowerOff}
        onHandleOperation={handleOperation}
        onHandleInput={handleInput}
        onCalculateResult={calculateResult}
        onhandlePosNeg={handlePosNeg}
        onhandlePercentage={handlePercentage}
      />
    </div>
  );
};

export default Calculator;
