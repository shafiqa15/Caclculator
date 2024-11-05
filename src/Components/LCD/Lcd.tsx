import React from "react";
import "../LCD/Lcd.css";
interface LCDDisplayProps {
  currentInput: string;
}

const Lcd: React.FC<LCDDisplayProps> = ({ currentInput }) => {
  return <div className="display">{currentInput}</div>;
};

export default Lcd;
export {};
