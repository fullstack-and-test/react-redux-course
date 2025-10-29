import "./FilmItem.css";

export default function FilmItem({ title, year, rating }) {
  return (
    <li className="film-item">
      <span className="film-title">{title}</span>{" "}
      <span className="film-year">({year})</span>{" "}
      <span>{rating > 0 && "⭐".repeat(rating)}</span>{" "}
    </li>
  );
}
