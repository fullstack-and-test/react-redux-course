import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.js";

export default function ThemeButton() {
  const context = useContext(ThemeContext);

  return (
    <button
      onClick={context.toggleTheme}
      style={{
        backgroundColor: context.theme === "dark" ? "black" : "white",
        color: context.theme === "dark" ? "white" : "black",
        padding: "10px",
      }}
    >
      Змінити тему на {context.theme === "light" ? "Темну" : "Світлу"}
    </button>
  );
}
