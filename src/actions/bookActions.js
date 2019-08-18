import types from "./types.json";

export const addBook = book => ({
  type: types.ADD_BOOK,
  book
});

export const removeBook = bookId => ({
  type: types.REMOVE_BOOK,
  bookId
});
