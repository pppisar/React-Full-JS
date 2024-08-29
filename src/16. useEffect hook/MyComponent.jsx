import React, { useEffect, useState } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Component mounted");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width}x${height}`;

    return () => {
      console.log("Window size effect unmounted");
    };
  }, [width, height]); // Only re-run effect if width or height changes)

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
}

export default MyComponent;
