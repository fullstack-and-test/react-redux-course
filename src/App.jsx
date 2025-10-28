import "./App.css";
import ProductCard from "./components/ProductCard.jsx";
import ProductPrice from "./components/ProductPrice.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserCard from "./components/UserCard.jsx";
import Button from "./components/Button.jsx";

function App() {
  return (
    <main>
      <UserProfile />
      <UserCard name="Іван" age={25} email="ivan@mail.com" />
      <ProductPrice price={1000} discount={10} />

      <Button onClick={() => console.log("handle click!")} disabled={false}>
        Натисни мене
      </Button>

      <Button onClick={() => console.log("Зберегти")}>Зберегти</Button>

      <Button variant="success" size="large">
        ✅ Підтвердити
      </Button>

      <Button variant="danger" size="small" disabled>
        ❌ Видалити
      </Button>

      <Button variant="outline" fullWidth>
        <span>📤</span>
        <span>Поділитися</span>
      </Button>

      <h1>Каталог Товарів</h1>
      {/* Products */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <footer>© 2024 Hillel IT School</footer>
    </main>
  );
}

export default App;
