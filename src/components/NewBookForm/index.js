import React, { useState, useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import "./styles.scss";

export default function NewBookForm({ book }) {
  const { addBook } = useContext(BookContext);

  const [formState, setFormState] = useState({ title: "", author: "" });
  const { title, author } = formState;

  const handleSubmit = event => {
    event.preventDefault();

    const newTitle = title.trim();
    const newAuthor = author.trim();

    if (newTitle && newAuthor) {
      addBook(newTitle, newAuthor);
    }

    setFormState({
      title: "",
      author: ""
    });
  };

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <form className="new-book-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        value={formState.title}
        onChange={handleInputChange}
        placeholder="Book title"
        required
      />

      <input
        name="author"
        type="text"
        value={formState.author}
        onChange={handleInputChange}
        placeholder="Author"
        required
      />

      <input type="submit" />
    </form>
  );
}
