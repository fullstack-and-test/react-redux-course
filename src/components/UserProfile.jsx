export default function UserProfile() {
  const userName = "Олена";
  const userAge = 25;

  return (
    <>
      <h1>Профіль користувача</h1>
      <img src="avatar.jpg" alt="Аватар" className="avatar" />
      <p>Ім'я: {userName}</p>
      <p>Вік: {userAge}</p>
      {/* <!-- Це коментар --> */}
      <input type="text" placeholder="Введіть текст" />
      <br />
    </>
  );
}
