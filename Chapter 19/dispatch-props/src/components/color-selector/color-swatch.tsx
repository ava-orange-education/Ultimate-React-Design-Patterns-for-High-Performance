import { ReactNode } from "react";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  height: "150px",
};

const contentStyle: React.CSSProperties = {
  width: "50%",
  height: "100%",
  border: "2px solid #1d4ed8",
  backgroundColor: "white",
  textAlign: "center",
  fontSize: "24px",
};

type ColorSwatchProps = {
  hexColor: string; 
};

const ColorSwatch = ({ hexColor }: ColorSwatchProps) => {
  return (
    <section style={containerStyle}>
      <div style={{ ...contentStyle, backgroundColor: hexColor }}>
        {hexColor}
      </div>
    </section>
  );
};

export default ColorSwatch;
