import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { id: uuid(), title: "Cashflow quadrant", author: "Robert Kiyosaki" },
    {
      id: uuid(),
      title: "The power of the moment now",
      author: "Eckhart Tolle"
    },
    { id: uuid(), title: "Unlimited Wealth", author: "Paul Zane Pilzer" }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
