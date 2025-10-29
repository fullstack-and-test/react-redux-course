import styles from "./UserStatus.module.css";

export default function UserStatus({ isLoggedIn, username, role, isOnline }) {
  if (!isLoggedIn) {
    return (
      <div className={styles.container}>Будь ласка, увійдіть в акаунт</div>
    );
  }

  const greeting =
    role === "admin"
      ? `Вітаємо, Адміністратор ${username}`
      : role === "user"
      ? `Привіт, ${username}`
      : "Привіт, Гість";

  const onlineStatus = isOnline ? "🟢 В мережі" : "⚫ Офлайн";

  return (
    <div className={styles.container}>
      <p className={styles.status}>{onlineStatus}</p>

      <h2>{greeting}</h2>

      {role === "admin" && (
        <button className={styles.adminButton}>Панель адміністратора</button>
      )}

      {role === "admin" && isOnline && (
        <span className={styles.vipBadge}>VIP</span>
      )}
    </div>
  );
}
