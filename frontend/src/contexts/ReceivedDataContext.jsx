"use client";
import { createContext, useState } from "react";

const ReceivedDataContext = createContext();

export const ReceivedDataProvider = ({ children }) => {
  const [receivedData, setReceivedData] = useState("");

  return (
    <ReceivedDataContext.Provider value={{ receivedData, setReceivedData }}>
      {children}
    </ReceivedDataContext.Provider>
  );
};

export default ReceivedDataContext;
