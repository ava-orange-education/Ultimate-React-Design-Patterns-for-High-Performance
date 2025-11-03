import { useState, useTransition } from "react";
import { StyledButton } from "./components/StyledComponents";
import Cover from "./components/Cover";
import Reviews from "./components/Reviews";
import Writer from "./components/Writer";

function App() {
  const [section, setSection] = useState("Cover");
  const sectionHandler = (sec) => {
    setSection(sec);
  };

  return (
    <>
      <Button onClick={() => sectionHandler("Cover")}>Book Cover</Button>
      <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
      <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>
      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

const Button = ({ onClick, ...props }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <StyledButton
      onClick={() => { startTransition(() => onClick())}}
      {...props}
    />
  );
};

export default App;
