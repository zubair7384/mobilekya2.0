import React, { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "Light", undefined });
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
