import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    let seconds = Math.floor((elapsedTime / 1000) % 60)
      .toString()
      .padStart(2, "0");
    let milliseconds = Math.floor((elapsedTime % 1000) / 10)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button className="start-button" onClick={start}>
            Start
          </button>
          <button className="stop-button" onClick={stop}>
            Stop
          </button>
          <button className="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
