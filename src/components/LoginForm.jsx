import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = "Alex";
    navigate("/dashboard", {
      replace: true,
      state: { message: "Вхід успішно виконано!", user },
    });
  };

  return (
    <>
      <h2>
        Login Form
      </h2>
      <form onSubmit={handleSubmit}>
        <button id="submit-btn">Log in</button>
      </form>
    </>
  );
}
