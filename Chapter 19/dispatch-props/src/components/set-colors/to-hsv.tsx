import { hex } from "color-convert"; 
import LabeledInput from "../common/labeled-input"; 

const containerStyle: React.CSSProperties = {
  display: "grid",
  width: "100%",
  gridAutoFlow: "column",
  gap: "0.5rem",
};

type HexToHSVProps = {
  hexColor: string;
};

const HexToHSV = ({ hexColor }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  return (
    <section style={containerStyle}>
      <LabeledInput label="H" type="number" value={h} />
      <LabeledInput label="S" type="number" value={s} />
      <LabeledInput label="V" type="number" value={v} />
    </section>
  );
};

export default HexToHSV;
