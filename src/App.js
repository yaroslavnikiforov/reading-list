import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />

          <Booklist />

          <ThemeButton />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
