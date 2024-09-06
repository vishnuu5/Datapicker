

import React from 'react';

import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceInputs from './RecurrenceInputs';
import DateRangePicker from './DateRangePicker';
import PreviewCalendar from './PreviewCalendar';
import { useState } from 'react';

const DatePicker = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());

  const handleDateChange = (date) => {
    setCalendarDate(date);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Date Picker</h2>
      <RecurrenceOptions />
      <RecurrenceInputs />
      <DateRangePicker />
      <PreviewCalendar onDateChange={handleDateChange} />
    </div>
  );
};

export default DatePicker;
