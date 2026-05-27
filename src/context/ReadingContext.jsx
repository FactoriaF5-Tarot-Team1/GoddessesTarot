import { createContext, useContext, useState, useEffect } from "react";

export const ReadingContext = createContext();

export function ReadingProvider({ children }) {
  const [readingData, setReadingData] = useState(null);
  const [history, setHistory] = useState([]);

  // Cargar historial desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("readingHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  // Guardar historial en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("readingHistory", JSON.stringify(history));
  }, [history]);

  // Añadir lectura al historial
  const addReadingToHistory = (reading) => {
    setHistory((prev) => [...prev, reading]);
  };

  // Borrar el historial completo
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <ReadingContext.Provider
      value={{
        readingData,
        setReadingData,
        history,
        addReadingToHistory,
        clearHistory,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
}

export const useReading = () => useContext(ReadingContext);
