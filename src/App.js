import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Navbar />

        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
