import "./App.css";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  return (
    <main>
      <h1>Каталог Товарів</h1>

      <ProductCard />
      <ProductCard />
      <ProductCard />

      <footer>© 2024 Hillel IT School</footer>
    </main>
  );
}

export default App;
