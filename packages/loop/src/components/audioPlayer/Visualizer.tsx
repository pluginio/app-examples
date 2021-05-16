import React, { useEffect } from "react";

const Visualizer = () => {
  useEffect(() => {
    window.requestAnimationFrame(() => update());
  }, []);

  const update = () => {
    let canvas = document.getElementById("waveCanvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 800, 60);
  };

  return (
    <canvas
      style={{ width: "100%" }}
      id="waveCanvas"
      width="800"
      height="0"
    ></canvas>
  );
};

export default Visualizer;
