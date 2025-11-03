import { Dispatch, MouseEventHandler } from "react"; 
import Button from "../common/button"; 
import ColorChangeSwatch from "../common/color-change-swatch";
import { ColorActions } from "../../reducer/colorReducer";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent: "space-between",
  width: "50%",
};

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
  dispatch: Dispatch<ColorActions>
};

const SavedColor = ({ name, hexColor, onClick, onRemove, dispatch }: SavedColorProps) => {
  return (
    <article style={containerStyle}>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Delete
      </Button>
      <ColorChangeSwatch
        hexColor={hexColor}
        colorName={name}
        onClick={() => dispatch({ type: 'update-hex', payload: { hexColor }})}
      />
    </article>
  );
};

export default SavedColor;
