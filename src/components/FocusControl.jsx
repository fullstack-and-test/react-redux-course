import { useEffect, useRef } from "react";

export default function FocusControl() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleFocus = () => {
    inputRef.current?.focus();

  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter text..." />
      <button onClick={handleFocus}>Focus me!</button>
    </div>
  );
}
