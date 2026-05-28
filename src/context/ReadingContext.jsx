import { createContext, useContext, useState, useEffect } from "react";
import { apiHistory } from "../services/apiHistory";

export const ReadingContext = createContext();

export function ReadingProvider({ children }) {
  const [readingData, setReadingData] = useState(null);
  const [history, setHistory] = useState([]);

  // 1. Cargar historial desde json-server
  useEffect(() => {
    async function loadHistory() {
      try {
        const { data } = await apiHistory.get();
        setHistory(data);
      } catch (error) {
        console.error("Error cargando historial:", error);
      }
    }

    loadHistory();
  }, []);

  // 2. Crear lectura en json-server
  async function addReadingToHistory(newReading) {
    try {
      const readingWithTimestamp = {
        ...newReading,
        timestamp: Date.now(),
      };

      const { data } = await apiHistory.create(readingWithTimestamp);

      setHistory((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error guardando lectura:", error);
    }
  }

  // 3. Actualizar lectura
  async function updateReading(id, updatedFields) {
    try {
      const current = history.find((r) => r.id === id);

      const updatedReading = {
        ...current,
        ...updatedFields,
      };

      const { data } = await apiHistory.update(id, updatedReading);

      setHistory((prev) =>
        prev.map((reading) => (reading.id === id ? data : reading)),
      );
    } catch (error) {
      console.error("Error actualizando lectura:", error);
    }
  }

  // 4. Borrar lectura
  async function deleteReading(id) {
    try {
      await apiHistory.delete(id);
      setHistory((prev) => prev.filter((r) => r.id !== id));
    } catch (error) {
      console.error("Error borrando lectura:", error);
    }
  }

  // 5. Borrar todo el historial (opcional)
  async function clearHistory() {
    try {
      await Promise.all(history.map((item) => apiHistory.delete(item.id)));
      setHistory([]);
    } catch (error) {
      console.error("Error borrando todo el historial:", error);
    }
  }

  return (
    <ReadingContext.Provider
      value={{
        readingData,
        setReadingData,
        history,
        addReadingToHistory,
        updateReading,
        deleteReading,
        clearHistory,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
}

export const useReading = () => useContext(ReadingContext);
