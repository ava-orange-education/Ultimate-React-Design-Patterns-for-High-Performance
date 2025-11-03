import { hex } from "color-convert"; 
import LabeledInput from "../common/labeled-input"; 
import { Dispatch } from "react";
import { ColorActions } from "../../reducer/colorReducer";

const containerStyle: React.CSSProperties = {
  display: "grid",
  width: "100%",
  gridAutoFlow: "column",
  gap: "0.5rem",
};

type HexToRGBProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  const updateRGB = ({ red = r, green = g, blue = b }) => {
    dispatch({
      type: "update-rgb",
      payload: { rgb: [red, green, blue] },
    });
  };


  return (
    <section style={containerStyle}>
      <LabeledInput label="R" type="number" value={r} onChange={(e) => updateRGB({ red: e.target.valueAsNumber, green: g, blue: b })} />
      <LabeledInput label="G" type="number" value={g} onChange={(e) => updateRGB({ red: r, green: e.target.valueAsNumber, blue: b })} />
      <LabeledInput label="B" type="number" value={b} onChange={(e) => updateRGB({ red: r, green: g, blue: e.target.valueAsNumber })} />
    </section>
  );
};

export default HexToRGB;
