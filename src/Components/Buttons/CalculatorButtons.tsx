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
  onhandlePosNeg: () => void;
  onhandlePercentage: () => void;
}

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({
  onClear,
  onClearLastInput,
  onCalculateRoot,
  onPowerOff,
  onHandleOperation,
  onHandleInput,
  onCalculateResult,
  onhandlePosNeg,
  onhandlePercentage,
}) => {
  return (
    <div>
      <div className="buttons">
        <button onClick={onClear}>AC</button>
        <button onClick={() => onhandlePosNeg()}>+/-</button>
        <button onClick={() => onhandlePercentage()}>%</button>
        <button onClick={onPowerOff}>OFF</button>

        <button onClick={onClearLastInput}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <button onClick={onCalculateRoot}>√</button>

        {Array.from({ length: 10 }, (_, i) => 9 - i).map((num) => (
          <button
            key={num}
            onClick={() => onHandleInput(num.toString())}
            className={num === 0 ? "last-input" : ""}
            style={num === 0 ? { gridColumn: "span 2" } : {}}
          >
            {num}
          </button>
        ))}

        <button onClick={() => onHandleInput(".")}>.</button>
      </div>
      <div
        className="opeartions"
        style={{ marginLeft: "32vh", marginTop: "-460px" }}
      >
        <button onClick={() => onHandleOperation("/")}>÷</button>
        <button onClick={() => onHandleOperation("*")}>×</button>
        <button onClick={() => onHandleOperation("-")}>-</button>
        <button onClick={() => onHandleOperation("+")}>+</button>
        <button onClick={onCalculateResult} className="equalbutton">
          =
        </button>
      </div>
    </div>
  );
};

export default CalculatorButtons;
