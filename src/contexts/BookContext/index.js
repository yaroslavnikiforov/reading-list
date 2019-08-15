import React, { createContext, useState } from "react";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { id: 1, title: "Cashflow quadrant" },
    { id: 2, title: "The power of the moment now" },
    { id: 3, title: "Rich Dad, poor Dad" },
    { id: 4, title: "Wild for life" }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
