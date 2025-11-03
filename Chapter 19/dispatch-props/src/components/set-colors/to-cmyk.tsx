import { hex } from "color-convert"; 
import LabeledInput from "../common/labeled-input"; 

const containerStyle: React.CSSProperties = {
  display: "grid",
  width: "100%",
  gridAutoFlow: "column",
  gap: "0.5rem",
};

type HexToCMYKProps = {
  hexColor: string;
};

const HexToCMYK = ({ hexColor }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  return (
    <section style={containerStyle}>
      <LabeledInput label="C" type="number" value={c} />
      <LabeledInput label="M" type="number" value={m} />
      <LabeledInput label="Y" type="number" value={y} />
      <LabeledInput label="K" type="number" value={k} />
    </section>
  );
};

export default HexToCMYK;
