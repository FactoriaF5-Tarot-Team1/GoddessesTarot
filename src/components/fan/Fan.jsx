import CardFan from "../cardFan/CardFan";
import styles from "./Fan.module.scss";

function Fan({ shuffledIds, selectCard, selectedCards }) {
  return (
    <div className={styles.fan}>
      {shuffledIds.map((id, index) => (
        <CardFan
          key={id}
          id={id}
          selectCard={selectCard}
          isDisabled={selectedCards.length >= 3}
          style={{
            transform: `rotate(${getRotation(index)}deg)`,
          }}
        />
      ))}
    </div>
  );
}

function getRotation(index) {
  const total = 22;
  const spread = 120;
  return -spread / 2 + (spread / (total - 1)) * index;
}

export default Fan;
