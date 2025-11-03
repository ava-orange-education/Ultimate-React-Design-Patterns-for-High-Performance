import { emitter } from "../App"

const Buttons = () => {
    const incrementCounter = () => {
        emitter.emit("increment")
    }
    const decrementCounter = () => { 
        emitter.emit("decrement")
    }

    return (
        <div>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}

export default Buttons