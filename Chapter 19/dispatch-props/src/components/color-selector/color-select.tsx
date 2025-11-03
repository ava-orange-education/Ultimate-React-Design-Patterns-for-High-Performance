import { ChangeEventHandler } from "react";
import HexColor from "../hex-color";
import LabeledInput from "../common/labeled-input";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

type ColorSelectProps = {
  hexColor: string; 
  label?: string; 
  onChange: ChangeEventHandler<HTMLInputElement>; 
};

const ColorSelect = ({
  hexColor,
  label = "Color",
  onChange,
}: ColorSelectProps) => {
  return (
    <div style={containerStyle}>
      <LabeledInput
        label={label}
        id="color-input"
        className="h-80 w-full"
        type="color"
        value={hexColor}
        onChange={onChange}
      />
    </div>
  );
};

export default ColorSelect;
