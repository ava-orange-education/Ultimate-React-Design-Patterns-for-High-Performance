import {
  getComplementColors,
  getTriadColors,
} from "../utils/get-related-colors";

import ColorGroupPalette from "./related-color-palette";

type ColorGroupsProps = {
  hexColor: string;
};

const ColorGroups = ({ hexColor }: ColorGroupsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <ColorGroupPalette
        title="Complementary Palette" 
        hexColors={complementColors}
      />

      <ColorGroupPalette
        title="Triadic Palette" 
        hexColors={triadColors} 
      />
    </>
  );
};

export default ColorGroups;
