import styles from "./Alert.module.css";
import classNames from "classnames";

const Alert = ({ message, variant = "warning", isLarge = false }) => {
  const alertClass = classNames(styles.alert, styles[variant], {
    [styles.large]: isLarge,
  });

  return <div className={alertClass}>{message}</div>;
};

export default Alert;
