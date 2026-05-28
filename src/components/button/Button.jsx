import React from "react";
import styles from "./Button.module.scss";

function Button({ handleClick, children, variant, size, ...props }) {
  const classNames = [styles.button, styles[variant], styles[size]].join(" ");

  return (
    <button onClick={handleClick} className={classNames} {...props}>
      {children}
    </button>
  );
}

export default Button;
