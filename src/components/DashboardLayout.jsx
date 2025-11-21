import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              style={(isActive) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Огляд
            </NavLink>
          </li>
          <li>
            <NavLink
              to="profile"
              style={(isActive) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Налаштування
            </NavLink>
          </li>
          <li>
            <NavLink
              to="orders"
              style={(isActive) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Замовлення
            </NavLink>
          </li>
        </ul>
      </nav>
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
