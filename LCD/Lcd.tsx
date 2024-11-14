import "../LCD/Lcd.css";
interface LCDDisplayProps {
  currentInput: string;
}

const Lcd = (props: LCDDisplayProps) => {
  return <div className="display">{props.currentInput}</div>;
};

export default Lcd;
