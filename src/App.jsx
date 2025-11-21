import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ProductListPage from "./components/ProductListPage.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx";

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
          <Route path="/products" element={<ProductListPage />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetailPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
