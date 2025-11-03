import { useState, useRef, useLayoutEffect } from "react";
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  }, [show]);

  const now = performance.now();
  while (now > performance.now() - 100) {}

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow(show => !show)}>Show</button>
      {show && (
        <div className="tooltip" style={{ top: `${top}px` }}>Info text ...</div>
      )}
    </>
  );
}

export default App;
