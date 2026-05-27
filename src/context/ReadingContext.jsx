import { createContext, useContext, useState } from "react";

export const ReadingContext = createContext();

export function ReadingProvider({ children }) {
  const [readingData, setReadingData] = useState({
    name: "",
    date: "",
    time: "",
  });

  return (
    <ReadingContext.Provider value={{ readingData, setReadingData }}>
      {" "}
      {children}
    </ReadingContext.Provider>
  );
}

export function useReading() {
  return useContext(ReadingContext);
}
