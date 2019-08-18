import React, { useState, useContext } from "react";
import uuid from "uuid/v4";
import { BookContext } from "../../contexts/BookContext";
import { addBook } from "../../actions/bookActions";
import "./styles.scss";

export default function NewBookForm({ book }) {
  const { dispatch } = useContext(BookContext);

  const [formState, setFormState] = useState({ title: "", author: "" });
  const { title, author } = formState;

  const handleSubmit = event => {
    event.preventDefault();

    const newTitle = title.trim();
    const newAuthor = author.trim();

    if (newTitle && newAuthor) {
      dispatch(addBook({ id: uuid(), title: newTitle, author: newAuthor }));
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
