export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button id="submit-btn">Submit</button>
    </form>
  );
}
