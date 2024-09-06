// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './dateSlice'; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});
