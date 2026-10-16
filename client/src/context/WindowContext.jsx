import { createContext, useContext, useMemo, useState } from "react";

const WindowContext = createContext(null);

export function WindowContextProvider({ children }) {
  const [title, setTitle] = useState("homepage.html");

  const [headerType, setHeaderType] = useState("weather");

  const configureWindow = ({ title, headerType }) => {
    if (title !== undefined) setTitle(title);
    if (headerType !== undefined) setHeaderType(headerType);
  };

  const value = useMemo(
    () => ({ title, setTitle, headerType, setHeaderType, configureWindow }),
    [title, headerType],
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
