import { useMousePosition } from "../hooks/useMousePosition";

const TrackMouse = (props) => {
    const position = useMousePosition();

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            Previous Mouse position - x: {position.x}, y: {position.y}
        </div>
    );
};

export default TrackMouse;