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

export { topFilms, actions, user, menuData };
