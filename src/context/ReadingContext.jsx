import { createContext, useContext, useState, useEffect } from "react";

export const ReadingContext = createContext();

export function ReadingProvider({ children }) {
  const [readingData, setReadingData] = useState(null);
  const [history, setHistory] = useState([]);
  const deleteReading = (id) => {
    setHistory((prev) => prev.filter((r) => r.id !== id));
  };

  useEffect(() => {
    const stored = localStorage.getItem("readingHistory");

    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("readingHistory", JSON.stringify(history));
  }, [history]);

  const addReadingToHistory = (reading) => {
    setHistory((prev) => [...prev, reading]);
  };

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
        deleteReading,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
}

export const useReading = () => useContext(ReadingContext);
