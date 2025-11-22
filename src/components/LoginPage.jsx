import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const handleClick = () => {
    setIsLoggedIn((prev) => !prev);
    navigate(from, { replace: true });
  };

  return (
    <div>
      <button onClick={handleClick}>{isLoggedIn ? "Log out" : "Log in"}</button>
    </div>
  );
};

export default LoginPage;
