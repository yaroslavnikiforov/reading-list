import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />

          <BookContextProvider>
            <Booklist />
          </BookContextProvider>

          <ThemeButton />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
