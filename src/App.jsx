import { Fragment, useState } from "react";

import "./App.css";

import ProductCard from "./components/ProductCard.jsx";
import ProductPrice from "./components/ProductPrice.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserCard from "./components/UserCard.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import FilmItem from "./components/FilmItem";
import AlertButton from "./components/AlertButton";
import GreetingButton from "./components/GreetingButton";
import DeleteButton from "./components/DeleteButton";
import LoginForm from "./components/LoginForm";
import ButtonList from "./components/ButtonList";
import NavigationMenu from "./components/NavigationMenu";
import RestaurantMenu from "./components/RestaurantMenu";
import HighScores from "./components/HighScores.jsx";
import LifecycleDemo from "./components/LifecycleDemo.jsx";
import ThemeButton from "./components/ThemeButton";
import TodoList from "./components/TodoList";
import FocusControl from "./components/FocusControl";
import CounterHistory from "./components/CounterHistory";

import { topFilms, actions, user, menuData } from "./constants.js";

import { ThemeContext } from "./ThemeContext.js";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={theme}>
        <ThemeButton />
        <FocusControl />
        <CounterHistory />
        <TodoList />
        <LifecycleDemo />
        <NavigationMenu />
        <HighScores />
        <UserProfile user={user} />
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

        <div>
          <h1>Топ-5 Фільмів Всіх Часів</h1>
          <ul>
            {topFilms.map(({ id, title, year, rating }, index) => (
              <Fragment key={id}>
                <strong>#{index + 1}</strong>
                <FilmItem title={title} year={year} rating={rating} />
              </Fragment>
            ))}
          </ul>
        </div>

        <>
          <AlertButton />
          <GreetingButton />
          <DeleteButton itemId={1234567} />
          <LoginForm />
          <ButtonList items={actions} />
        </>

        <RestaurantMenu data={menuData} />

        <footer>© 2024 Hillel IT School</footer>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
