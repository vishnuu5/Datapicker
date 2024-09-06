// store/dateSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the date picker
const initialState = {
  recurrence: 'daily', // Default recurrence pattern
  interval: 1, // Default interval
  specificDays: [], // Days of the week for weekly recurrence
  nthDay: '', // Nth day for monthly recurrence
  yearMonth: '', // Month for yearly recurrence
  yearDay: '', // Day of the month for yearly recurrence
  startDate: '', // Start date for recurrence
  endDate: '', // End date for recurrence
};

// Create a slice of the Redux store
const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setRecurrence(state, action) {
      state.recurrence = action.payload;
    },
    setInterval(state, action) {
      state.interval = action.payload;
    },
    setSpecificDays(state, action) {
      state.specificDays = action.payload;
    },
    setNthDay(state, action) {
      state.nthDay = action.payload;
    },
    setYearMonth(state, action) {
      state.yearMonth = action.payload;
    },
    setYearDay(state, action) {
      state.yearDay = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
  },
});

// Export actions to be used in components
export const {
  setRecurrence,
  setInterval,
  setSpecificDays,
  setNthDay,
  setYearMonth,
  setYearDay,
  setStartDate,
  setEndDate,
} = dateSlice.actions;

// Export the reducer to be included in the store
export default dateSlice.reducer;
