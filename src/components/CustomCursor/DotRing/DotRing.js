import "./DotRing.scss";
import useMousePosition from "../../hooks/useMousePosition";

const DotRing = () => {
  const { x, y } = useMousePosition();
  return (
    <div className="cursor">
        {/* Ring will follow the dot */}
        <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
        ></div>

        <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
    </div>
  );
};

export default DotRing;