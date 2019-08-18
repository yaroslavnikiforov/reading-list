import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import BookDetails from "../BookDetails";
import "./styles.scss";

export default function BookList() {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <BookDetails key={book.id} book={book}></BookDetails>
        ))}
      </ul>
    </div>
  ) : (
    <div className="book-list-empty">No books to read</div>
  );
}
