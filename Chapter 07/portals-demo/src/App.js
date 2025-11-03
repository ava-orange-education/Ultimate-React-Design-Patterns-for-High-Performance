import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "absolute", marginBottom: "200px" }}>
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        <h2>This is Sample message.</h2>
        <p>Click to close.</p>
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return;
  return createPortal(
    <div className="alert" onClick={onClose}>
      {children}
    </div>,
    document.querySelector("#alert-holder")
  );
};

export default App;
