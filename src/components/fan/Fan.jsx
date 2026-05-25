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
            "--rotation": `${getRotation(index)}deg`,
            "--offset": `${getOffset(index)}px`,
            left: `calc(50% + var(--offset))`,
          }}
        />
      ))}
    </div>
  );
}

function getRotation(index) {
  const total = 22;
  const spread = 90;
  return -spread / 2 + (spread / (total - 1)) * index;
}

function getOffset(index) {
  const total = 22;
  const spacing = 10;
  return (index - (total - 1) / 2) * spacing;
}

export default Fan;
