import "./App.css";
import ProductCard from "./components/ProductCard.jsx";
import ProductPrice from "./components/ProductPrice.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserCard from "./components/UserCard.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <main>
      <UserProfile />
      <Counter />
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
      <UserStatus
        isLoggedIn={false}
        username="Олена"
        role="user"
        isOnline={true}
      />
      <UserStatus
        isLoggedIn={true}
        username="Олена"
        role="admin"
        isOnline={true}
      />
      <UserStatus
        isLoggedIn={true}
        username="Іван"
        role="user"
        isOnline={false}
      />
      <h1>Каталог Товарів</h1>
      {/* Products */}

      <ProductCard
        name="Ноутбук Lenovo"
        price={25000}
        inStock={false}
        discount={0}
        rating={4}
        isFeatured={true}
        freeShipping={false}
      />

      <ProductCard
        name="Навушники Sony"
        price={3500}
        inStock
        discount={15}
        rating={5}
        isFeatured
        freeShipping
      />

      <ProductCard
        name="Навушники JBL"
        price={2899}
        inStock
        discount={0}
        rating={4}
        isFeatured={false}
        freeShipping={false}
      />

      <ProductCard
        name="Навушники Sennheiser "
        price={3499}
        inStock
        discount={0}
        rating={0}
        isFeatured
        freeShipping
      />

      <ProductCard
        name="Навушники Xiomi "
        price={1999.89}
        inStock
        discount={51}
        rating={0}
        isFeatured={false}
        freeShipping
      />

      <ProductCard />
      <ProductCard />
      <ProductCard />
      <footer>© 2024 Hillel IT School</footer>
    </main>
  );
}

export default App;
