import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [themeState, setThemeType] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  });

  const toggleTheme = () => {
    const changedTheme = {
      ...themeState,
      isLightTheme: !themeState.isLightTheme
    };

    setThemeType(changedTheme);
  };

  return (
    <ThemeContext.Provider value={{ ...themeState, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
