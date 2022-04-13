import { darkScrollbar } from "@mui/material";
import { useRef, useEffect } from "react";

const Cursor = () => {
  const delay = 18;
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const cursorVisaible = useRef(true);
  const cursorEnlarge = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    console.log("Cursor Mounted");
    animateDotOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current);
      console.log("Cursor Unmounted");
    };
  });
  const toggleCursorVisaible = () => {
    if (cursorVisaible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };
  const toggleCursorSize = () => {
    if (cursorEnlarge.current) {
      dot.current.style.transform = "transform(-50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "transform(-50%, -50%) scale(1.50)";
    } else {
      dot.current.style.transform = "transform(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "transform(-50%, -50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorVisaible.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorVisaible.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = (e) => {
    cursorVisaible.current = true;
    toggleCursorVisaible();
  };

  const mouseLeaveEvent = () => {
    cursorVisaible.current = false;
    toggleCursorVisaible();
  };
  const mouseMoveEvent = (e) => {
    cursorVisaible.current = true;
    toggleCursorVisaible();
    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };
  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";
  };
  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
