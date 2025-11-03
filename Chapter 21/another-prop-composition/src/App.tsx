import { useState } from "react";
import "./App.css";
import TextPan from "./components/TextPan";

function App() {
  const [expanded, setExpanded] = useState(false);
  const dummyText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quo recusandae ullam? Numquam aliquam consectetur quia cum nihil culpa maiores? Reprehenderit eius rem sunt, nemo amet nulla? Earum, voluptas perspiciatis illum ratione a quo minus necessitatibus quisquam, atque repudiandae cum eius quia architecto fugiat dignissimos qui, obcaecati distinctio dolorem itaque iusto expedita. Maxime repellendus saepe tempore dicta, molestias voluptates adipisci et porro quibusdam est.";
    

  return (
    <div className="container">
      <TextPan short expanded={expanded}>{dummyText}</TextPan>
      <section style={{ marginTop: "1em" }}>
        <button
          className={expanded ? "secondary" : "primary"}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Shorten" : "Expand"}
        </button>
      </section>
    </div>
  );
}

export default App;
