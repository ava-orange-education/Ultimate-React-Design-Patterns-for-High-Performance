import { MouseEventHandler, useState } from "react";

type RenderPositionProps = {
    children: (props: { x: number; y: number }) => React.ReactNode;
};

const RenderPositionProps = ({ children }: RenderPositionProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition: MouseEventHandler = e => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className="relative-container" onMouseMove={updatePosition}>
            {children({ x: position.x, y: position.y })}
        </div>
    );
}

export default RenderPositionProps