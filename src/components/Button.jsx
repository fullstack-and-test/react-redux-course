import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  onClick,
  children,
}) {
  const className = `
    ${styles[variant]}
    ${styles[size]}
    ${fullWidth ? styles.fullWidth : ""}
	`.trim();

  return (
    <button
      className={className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
