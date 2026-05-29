import Button from "../../components/button/Button";
import Bin from "../../assets/icons/bin.svg";
import styles from "./History.module.scss";
import ReadingCardHistoryContainer from "../../components/reading-card-history-container/ReadingCardHistoryContainer";
import { useReading } from "../../context/ReadingContext";

function History() {
  const { history, clearHistory } = useReading();

  const sortedHistory = [...history].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <>
      <section className={styles.historyContainer}>
        <p className={styles.subtitle}>Sabiduría en datos</p>

        <div className={styles.headerDivider}>
          <h2 className={styles.title}>Historial de Lecturas</h2>

          {history.length > 0 && (
            <Button variant="delete" onClick={clearHistory}>
              <img src={Bin} alt="Icono de una papelera de basura" />
              Eliminar todas las lecturas
            </Button>
          )}
        </div>
      </section>

      {history.length === 0 && (
        <p className={styles.emptyMessage}>
          Todavía no hay lecturas guardadas. Realiza tu primera lectura para
          verla aquí.
        </p>
      )}

      {sortedHistory.map((reading) => (
        <ReadingCardHistoryContainer key={reading.id} reading={reading} />
      ))}
    </>
  );
}

export default History;
