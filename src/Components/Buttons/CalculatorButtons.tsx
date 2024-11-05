import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../Buttons/CalculatorButtons.css";

interface CalculatorButtonsProps {
  onClear: () => void;
  onClearLastInput: () => void;
  onCalculateRoot: () => void;
  onPowerOff: () => void;
  onHandleOperation: (operation: string) => void;
  onHandleInput: (value: string) => void;
  onCalculateResult: () => void;
}

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({
  onClear,
  onClearLastInput,
  onCalculateRoot,
  onPowerOff,
  onHandleOperation,
  onHandleInput,
  onCalculateResult,
}) => {
  return (
    <div className="buttons">
      <button onClick={onClear}>AC</button>
      <button onClick={onClearLastInput}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <button onClick={onCalculateRoot}>√</button>
      <button onClick={onPowerOff}>OFF</button>
      <button onClick={() => onHandleOperation("/")}>/</button>
      <button onClick={() => onHandleOperation("*")}>*</button>
      <button onClick={() => onHandleOperation("-")}>-</button>
      <button onClick={() => onHandleOperation("+")}>+</button>
      {Array.from({ length: 10 }, (_, i) => (
        <button key={i} onClick={() => onHandleInput(i.toString())}>
          {i}
        </button>
      ))}
      <button onClick={() => onHandleInput(".")}>.</button>
      <button onClick={onCalculateResult}>=</button>
    </div>
  );
};

export default CalculatorButtons;
