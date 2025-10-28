export default function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Вік: {age} років</p>
      <p>Email: {email}</p>
    </div>
  );
}
