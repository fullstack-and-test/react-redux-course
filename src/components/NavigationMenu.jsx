import "./NavigationMenu.css";
import { useState, useEffect } from "react";

export default function NavigationMenu() {
  const [clickCounter, setClickCounter] = useState(() => {
    const saved = localStorage.getItem("clickCounter");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("clickCounter", clickCounter);
  }, [clickCounter]);

  const menuItems = [
    { id: 1, name: "Головна", url: "/", icon: "🏠" },
    { id: 2, name: "Про нас", url: "/about", icon: "ℹ️" },
    { id: 3, name: "Контакти", url: "/contact", icon: "📞" },
    { id: 4, name: "Блог", url: "/blog", icon: "📝" },
    { id: 5, name: "Послуги", url: "/services", icon: "⚙️" },
  ];

  const handleLinkClick = (event, name, url) => {
    event.preventDefault();
    event.stopPropagation();

    const confirmed = confirm(`Перейти на ${name}?`);

    if (confirmed) {
      setClickCounter((prev) => prev + 1);
      console.log(`Перехід на ${url}`);
      window.location.href = url;
    }
  };

  return (
    <nav className="navigation-menu">
      <h2 className="menu-title">Меню навігації</h2>
      <p className="menu-description">Кількість переходів: {clickCounter}</p>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <a
              className="menu-link"
              href={item.url}
              onClick={(e) => handleLinkClick(e, item.name, item.url)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
              <span className="menu-arrow">→</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
