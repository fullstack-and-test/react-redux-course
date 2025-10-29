import "./ButtonList.css";

export default function ButtonList({ items }) {
  const handleAction = (name, action) => alert(`Дія: ${name}, Тип: ${action}`);
  return (
    <div className="button-list">
      <h2>Список дій</h2>
      <div className="buttons-container">
        {items.map((item) => (
          <button
            className="action-button"
            key={item.id}
            onClick={() => handleAction(item.name, item.action)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
