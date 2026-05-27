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

  {
    id: "mock-2",
    name: "María José",
    date: "12 de febrero de 2026",
    time: "09:14",
    cards: {
      past: {
        arcaneName: "El Loco",
        arcaneImage: {
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
        },
      },
      present: {
        arcaneName: "La Emperatriz",
        arcaneImage: {
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
        },
      },
      future: {
        arcaneName: "El Sol",
        arcaneImage: {
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
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
