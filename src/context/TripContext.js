import { createContext, useContext, useState } from "react";
import { data } from "../db";

const TripContext = createContext();

export const TripContextProvider = ({ children }) => {
  const [places, ] = useState(data);
  return <TripContext.Provider value={{places}}>{children}</TripContext.Provider>;
};

export const useTripContext = () => useContext(TripContext);
