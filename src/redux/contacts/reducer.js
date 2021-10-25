import { createReducer } from "@reduxjs/toolkit";
import {
  addToPhonebook,
  removeFromPhonebook,
  filterPhonebook,
} from "./actions";
import { generate } from "shortid";
import { combineReducers } from "redux";

const itemsReducer = createReducer([], {
  [addToPhonebook]: (store, { payload }) => {
    const newContact = { ...payload, id: generate() };
    store.push(newContact);
  },
  [removeFromPhonebook]: (store, { payload }) => {
    const idx = store.findIndex(({ id }) => id === payload);
    store.splice(idx, 1);
  },
});

const filterReducer = createReducer("", {
  [filterPhonebook]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

// const itemsReducer = (
//   store = initialState.contacts.items,
//   { type, payload }
// ) => {
//   switch (type) {
//     case types.ADD_TO_PHONEBOOK:
//       const newContact = { ...payload, id: generate() };
//       return [...store, newContact];

//     case types.REMOVE_FROM_PHONEBOOK:
//       const updateContacts = store.filter((item) => item.id !== payload);
//       return updateContacts;

//     default:
//       return store;
//   }
// };

// const filterReducer = (
//   store = initialState.contacts.filter,
//   { type, payload }
// ) => {
//   switch (type) {
//     case types.FILTER_PHONEBOOK:
//       return payload;

//     default:
//       return store;
//   }
// };
