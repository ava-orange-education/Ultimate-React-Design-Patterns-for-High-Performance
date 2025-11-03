import clsx from "clsx";
import { MouseEventHandler } from "react";
import Button from "./button";
import { useContext } from "../../context/context";

type ColorChangeSwatchProps = {
  hexColor: string;
  colorName?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ColorChangeSwatch = ({ hexColor, colorName, className }: ColorChangeSwatchProps) => {
  const { dispatch } = useContext();

  return (
    <Button
      className={clsx("color-input", className)}
      style={{
        backgroundColor: hexColor,
        width: "100%",
        height: "100%",
        maxHeight: "43px",
      }}
      onClick={() => dispatch({type: 'update-hex', payload:{hexColor}})}
    >
      {colorName}
      <br />
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
