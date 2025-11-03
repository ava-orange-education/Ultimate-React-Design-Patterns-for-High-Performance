import { PropsWithChildren, useState } from "react"; 
import Button from "../common/button"; 
import LabeledInput from "../common/labeled-input"; 

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

type AddSavedColorProps = {
  onSave: (color: string) => void;
};

const AddSavedColor = ({ onSave }: PropsWithChildren<AddSavedColorProps>) => {
  const [savedColorName, setSavedColorName] = useState("");

  return (
    <form
      style={containerStyle}
      onSubmit={(e) => {
        e.preventDefault();
        onSave(savedColorName);
      }}
    >
      <LabeledInput
        label="Give it a name"
        value={savedColorName}
        onChange={(e) => setSavedColorName(e.target.value)}
      />
      <Button variant="primary" style={{ width: "50%" }}>
        Save
      </Button>
    </form>
  );
};

export default AddSavedColor;
