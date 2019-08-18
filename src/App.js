import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";

export default function App() {
  return (
    <div className="app">
      <BookContextProvider>
        <Navbar />

        <BookList />

        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}
