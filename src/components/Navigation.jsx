import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-list">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-link" : "default-link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "active-link" : "default-link"
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "active-link" : "default-link"
        }
      >
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
