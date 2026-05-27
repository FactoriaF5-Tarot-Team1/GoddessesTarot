import styles from "./TurnIndicator.module.scss";

function TurnIndicator({ currentTurn }) {
  const messages = {
    pasado: "Elige tu carta del pasado",
    presente: "Elige tu carta del presente",
    futuro: "Elige tu carta del futuro",
  };

  return (
    <p className={`${styles.indicator} ${!currentTurn ? styles.hidden : ""}`}>
      {messages[currentTurn]}
    </p>
  );
}

export default TurnIndicator;
