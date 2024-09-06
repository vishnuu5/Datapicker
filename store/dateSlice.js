
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  recurrence: 'daily', 
  interval: 1, 
  specificDays: [], 
  nthDay: '', 
  yearMonth: '', 
  yearDay: '', 
  startDate: '', 
  endDate: '', 
};


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


export default dateSlice.reducer;
