import { createContext, useContext, useState, useEffect } from "react";
import { apiHistory } from "../services/apiHistory";
import ConfirmModal from "../components/modal/confirm-modal/ConfirmModal"; 

export const ReadingContext = createContext();

export function ReadingProvider({ children }) {
  const [readingData, setReadingData] = useState(null);
  const [history, setHistory] = useState([]);

  const [confirmConfig, setConfirmConfig] = useState(null);

  function askConfirmation(message) {
    return new Promise((resolve) => {
      setConfirmConfig({
        message,
        onConfirm: () => {
          resolve(true);
          setConfirmConfig(null);
        },
        onCancel: () => {
          resolve(false);
          setConfirmConfig(null);
        },
      });
    });
  }

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
    const confirmed = await askConfirmation(
      "¿Estás segura de que quieres actualizar esta lectura?"
    );

    if (!confirmed) return;

    try {
      const current = history.find((r) => r.id === id);

      const updatedReading = {
        ...current,
        ...updatedFields,
      };

      const { data } = await apiHistory.update(id, updatedReading);

      setHistory((prev) =>
        prev.map((reading) => (reading.id === id ? data : reading))
      );
    } catch (error) {
      console.error("Error actualizando lectura:", error);
    }
  }

  // 4. Borrar lectura individual
  async function deleteReading(id) {
    const confirmed = await askConfirmation(
      "¿Estás segura de que quieres eliminar esta lectura?"
    );

    if (!confirmed) return;

    try {
      await apiHistory.delete(id);
      setHistory((prev) => prev.filter((r) => r.id !== id));
    } catch (error) {
      console.error("Error borrando lectura:", error);
    }
  }

  // 5. Borrar todo el historial
  async function clearHistory() {
    const confirmed = await askConfirmation(
      "¿Estás segura de que quieres eliminar TODAS las lecturas?"
    );

    if (!confirmed) return;

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

      {/* Modal de confirmación */}
      {confirmConfig && (
        <ConfirmModal
          message={confirmConfig.message}
          onConfirm={confirmConfig.onConfirm}
          onCancel={confirmConfig.onCancel}
        />
      )}
    </ReadingContext.Provider>
  );
}

export const useReading = () => useContext(ReadingContext);
