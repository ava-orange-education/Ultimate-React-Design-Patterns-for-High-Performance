import { useCartContext } from "./CartProvider";

const Buttons = () => {
  const { dispatch } = useCartContext();
  return (
    <div className="buttons">
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
    </div>
  );
};

export default Buttons;
