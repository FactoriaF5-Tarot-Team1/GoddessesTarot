import React from "react";
import styles from "./Button-module.scss";

function Button({ handleClick, children, variant, ...props }) {
  const classNames = [styles.button, styles[variant]].join(" ");

  return (
    <button onClick={handleClick} className={classNames} {...props}>
      {children}
    </button>
  );
}

export default Button;
