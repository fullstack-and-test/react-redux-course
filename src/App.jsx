import { Fragment } from "react";

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

function App() {
  const topFilms = [
    { id: 101, title: "Втеча з Шоушенка", year: 1994, rating: 4.8 },
    { id: 102, title: "Хрещений батько", year: 1972, rating: 4.9 },
    { id: 103, title: "Темний лицар", year: 2008 },
    { id: 104, title: "12 розгніваних чоловіків", year: 1957 },
    { id: 105, title: "Список Шиндлера", year: 1993, rating: 3 },
  ];

  const actions = [
    { id: 1, name: "Зберегти", action: "save" },
    { id: 2, name: "Видалити", action: "delete" },
    { id: 3, name: "Редагувати", action: "edit" },
    { id: 4, name: "Поділитися", action: "share" },
  ];

  const user = {
    name: "Олена Шевченко",
    avatar: "https://i.pravatar.cc/150?img=66",
    email: "olena@example.com",
    phone: "+380 67 123 4567",
    bio: "Full-stack розробник. Люблю React та TypeScript.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/...", icon: "🐙" },
      { platform: "LinkedIn", url: "https://linkedin.com/...", icon: "💼" },
      { platform: "Twitter", url: "https://twitter.com/...", icon: "🐦" },
    ],
  };

  const menuData = [
    {
      categoryId: 1,
      categoryName: "Перші страви",
      items: [
        {
          id: 101,
          name: "Борщ український",
          price: 85,
          description: "З м'ясом та сметаною",
        },
        { id: 102, name: "Солянка", price: 95, description: "М'ясна збірна" },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Основні страви",
      items: [
        {
          id: 201,
          name: "Курка по-київськи",
          price: 180,
          description: "З гарніром",
        },
        {
          id: 202,
          name: "Стейк з яловичини",
          price: 250,
          description: "Середньої прожарки",
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "Десерти",
      items: [
        {
          id: 301,
          name: "Тірамісу",
          price: 75,
          description: "Класичний італійський",
        },
        { id: 302, name: "Чізкейк", price: 70, description: "Нью-йоркський" },
      ],
    },
  ];

  return (
    <main>
      <NavigationMenu />
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
  );
}

export default App;
