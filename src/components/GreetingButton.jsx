export default function GreetButton() {
  const handleClick = () => alert("Hello!");
  
  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}