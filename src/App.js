import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";

export default function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Navbar />

        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}
