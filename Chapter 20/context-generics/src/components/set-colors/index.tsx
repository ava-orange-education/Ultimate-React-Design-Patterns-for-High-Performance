import { Dispatch } from "react";
import ColorName from "./color-name"; 
import HexToCMYK from "./to-cmyk"; 
import HexToHSL from "./to-hsl"; 
import HexToHSV from "./to-hsv"; 
import HexToRGB from "./to-rgb"; 
import { ColorActions } from "../../reducer/colorReducer";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1rem",
};

type SetColorsProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const SetColors = ({ hexColor, dispatch }: SetColorsProps) => {
  return (
    <div style={containerStyle}>
      <h3>Set Colors</h3>
      <HexToRGB hexColor={hexColor} dispatch={dispatch} />
      <HexToHSL hexColor={hexColor} />
      <HexToHSV hexColor={hexColor} />
      <HexToCMYK hexColor={hexColor} />
      <ColorName hexColor={hexColor} />
    </div>
  );
};

export default SetColors;
