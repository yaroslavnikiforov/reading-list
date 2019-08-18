import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BookContext } from "../../contexts/BookContext";
import "./styles.scss";

export default function BookDetails({ book }) {
  const { removeBook } = useContext(BookContext);

  const handleBookRemove = () => removeBook(book.id);

  return (
    <li className="details" onClick={handleBookRemove}>
      <div className="details__title">{book.title}</div>

      <div className="details__author">{book.author}</div>
    </li>
  );
}

BookDetails.propTypes = {
  book: PropTypes.object.isRequired
};
