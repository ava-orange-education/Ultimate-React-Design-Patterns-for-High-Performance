import styles from "./Button.module.css";

const Button = ({ As = "button", size = "m", className = "", ...otherProps }) => {
  return (
    <As
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
