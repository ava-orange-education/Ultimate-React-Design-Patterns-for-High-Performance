import { Dispatch, useState } from "react"; 
import id from "lodash.uniqueid"; 
import AddSavedColor from "./add-saved-color"; 
import SavedColor from "./saved-color"; 
import { ColorActions } from "../../reducer/colorReducer";

const containerStyle: React.CSSProperties = {
  display: "flex", flexDirection: "column", width: "100%", gap: "1rem",
};

type SavedColorsProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const saved_colors = [
  { id: id(), name: "Rosy Brown", hexColor: "#BC8F8F" },
  { id: id(), name: "Royal Blue", hexColor: "#4169E1" },
];

const SavedColors = ({ hexColor, dispatch }: SavedColorsProps) => {
  const [savedColors, setSavedColors] = useState(saved_colors);

  return (
    <section style={containerStyle}>
      <h3>Save Your Color</h3>
      <AddSavedColor onSave={(name) => setSavedColors((colors) => [...colors, { id: id(), name, hexColor }])} />
      {savedColors.map(({ id, name, hexColor }) => {
        return (
          <SavedColor key={id} name={name} hexColor={hexColor} dispatch={dispatch} onRemove={() => setSavedColors((colors) => colors.filter((color) => color.id !== id))} />
        );
      })}
    </section>
  );
};

export default SavedColors;
