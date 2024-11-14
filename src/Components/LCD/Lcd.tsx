import React from "react";
import "../LCD/Lcd.css";

interface LCDDisplayProps {
  currentInput: string;
}

const Lcd: React.FC<LCDDisplayProps> = ({ currentInput }) => {
  const displayValue = currentInput.slice(-19);
  return <div className="display">{displayValue}</div>;
};

export default Lcd;
