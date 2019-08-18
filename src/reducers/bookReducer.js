import types from "../actions/types";

export default function(state, action) {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, action.book];

    case types.REMOVE_BOOK:
      return state.filter(book => book.id !== action.bookId);

    default:
      return state;
  }
}
