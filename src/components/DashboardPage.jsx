import { useLocation } from "react-router-dom";

export default function DashboardPage() {
  const location = useLocation();
  const { message, user } = location.state || {};

  return (
    <div>
      <h2>Ласкаво просимо на Дашборд!</h2>
      {user && <p>Привіт, {user}!</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
