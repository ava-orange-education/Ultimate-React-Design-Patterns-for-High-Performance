import { ChangeEventHandler } from "react";
import ColorSelect from "./color-select";
import ColorSwatch from "./color-swatch";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1rem",
};

type ColorPickerProps = {
  hexColor: string; 
  onChange: ChangeEventHandler<HTMLInputElement>; 
};

const ColorPicker = ({ hexColor, onChange }: ColorPickerProps) => {
  return (
    <div style={containerStyle}>
      <h3>Choose Color</h3>
      <ColorSelect hexColor={hexColor} onChange={onChange} />
      <ColorSwatch hexColor={hexColor} />
    </div>
  );
};

export default ColorPicker;
