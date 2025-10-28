export default function ProductPrice({ price, discount }) {
  return (
    <div>
      <p>Ціна: {price} грн</p>
      <p>Знижка: {discount}%</p>
      <p>Ціна зі знижкою: {price - (price * discount) / 100} грн</p>
    </div>
  );
}
