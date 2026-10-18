import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { WeatherElement } from "../components/HeaderElements/WeatherElement";

const WindowContext = createContext(null);

export function WindowContextProvider({ children }) {
  const [title, setTitle] = useState("homepage.html");

  const [header, setHeader] = useState(<WeatherElement />);

  const configureWindow = useCallback(({ title, header }) => {
    if (title !== undefined) setTitle(title);
    if (header !== undefined) setHeader(header);
  }, []);

  const value = useMemo(
    () => ({ title, setTitle, header, setHeader, configureWindow }),
    [title, header, configureWindow],
  );

  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  );
}

export function useWindow() {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useWindow must be used within a WindowContextProvider");
  }
  return context;
}
