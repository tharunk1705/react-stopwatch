/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const ScrollableDiv = ({ children }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    div.scrollTop = div.scrollHeight;
  }, [children]);
  return (
    <div
      ref={divRef}
      className="h-full overflow-y-auto flex flex-col scroll-smooth  gap-3 w-full pr-4"
    >
      {children}
    </div>
  );
};

export default ScrollableDiv;
