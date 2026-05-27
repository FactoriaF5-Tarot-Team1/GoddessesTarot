import { createContext, useContext, useState, useEffect } from "react";

export const ReadingContext = createContext();

const mock = [
  {
    id: "mock-1",
    name: "Ivanna",
    date: "24 de octubre de 2025",
    time: "15:32",
    cards: {
      past: {
        arcaneName: "La Luna",
        arcaneImage: {
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
        },
      },
      present: {
        arcaneName: "El Mago",
        arcaneImage: {
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        },
      },
      future: {
        arcaneName: "La Estrella",
        arcaneImage: {
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
        },
      },
    },
  },
];

export function ReadingProvider({ children }) {
  const [readingData, setReadingData] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("readingHistory");

    if (stored && stored !== "[]") {
      console.log("Cargando desde localStorage");
      setHistory(JSON.parse(stored));
    } else {
      console.log("Cargando MOCK");
      setHistory(mock);
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
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
}

export const useReading = () => useContext(ReadingContext);
