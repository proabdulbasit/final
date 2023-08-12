import { MouseEvent, useEffect, useRef, useState } from "react"
import { motion as m } from "framer-motion"

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export const FollowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const mouseRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    // @ts-ignore
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    // @ts-ignore
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (mouseRef.current) {
      const element = mouseRef.current;
      const x = e.clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = e.clientY - element.offsetTop - element.offsetHeight / 2;
      setPosition({ x, y });
    }
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    const elements = ".animate-cursor-hovered, a, button, p, li";
    document.querySelectorAll(elements)
      .forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
  };

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <m.div
      ref={mouseRef}
      className={`${(clicked || linkHovered) ? "bg-[#fefefe] border-[#fefefe]" : "border-[#fefefe]"} w-[40px] h-[40px] border-2 rounded-full fixed pointer-events-none z-[999] mix-blend-difference`}
      animate={{
        x: position.x,
        y: position.y,
        opacity: hidden ? 0 : 1,
        scale: (clicked || linkHovered) ? clicked ? 0.8 : 1.4 : 1
      }}
      transition={{
        type: "spring",
        damping: 10,
        restDelta: 0.001
      }}
    />
  );
}