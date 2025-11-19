import useToggle from "./useToggle";

const ToggleExample = () => {
  const [isOn, toggle, setTrue, setFalse] = useToggle(false);

  return (
    <div>
      <p>{isOn ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>turn ON</button>
      <button onClick={setFalse}>turn OFF</button>
    </div>
  );
};

export default ToggleExample;