import { useEffect, useRef, useState } from "react";

export default function CounterHistory() {
  const [counter, setCounter] = useState(99);

  const prevCounterRef = useRef(null);

  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <p>Current: {counter}</p>
      <p>Previous: {prevCounterRef.current}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
