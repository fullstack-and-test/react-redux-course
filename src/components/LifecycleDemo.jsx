import { useState, useEffect } from "react";

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component MOUNTED (First Render Complete)");
  }, []);

  useEffect(() => {
    console.log(`Count was updated. New value: {count}`);
  }, [count]);

  useEffect(() => {
    console.log("Component RENDERED (Any Update)");
  });

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
