export default function Button({
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  onClick,
  children,
}) {
  return (
    <button
      className={`${variant} ${size} ${fullWidth ? "fullWidth" : ""}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
