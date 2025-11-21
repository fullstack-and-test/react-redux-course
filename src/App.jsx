import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import DashboardLayout from "./components/DashboardLayout.jsx";
import OverviewPage from "./components/OverviewPage.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import OrderHistory from "./components/OrderHistory.jsx";

import { ThemeContext } from "./ThemeContext.js";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="orders" element={<OrderHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
