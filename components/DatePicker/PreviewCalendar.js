import React from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

const PreviewCalendar = ({ onDateChange }) => {
  const { startDate, recurrence, interval } = useSelector(state => state.date);

  const generateRecurringDates = () => {
    let dates = [];
    if (!startDate) return dates;

    const start = dayjs(startDate);
    const end = dayjs().add(1, 'year');

    switch (recurrence) {
      case 'daily':
        for (let date = start; date.isBefore(end); date = date.add(interval, 'day')) {
          dates.push(date.format('YYYY-MM-DD'));
        }
        break;
      case 'weekly':
        for (let date = start; date.isBefore(end); date = date.add(interval, 'week')) {
          dates.push(date.format('YYYY-MM-DD'));
        }
        break;
      case 'monthly':
        for (let date = start; date.isBefore(end); date = date.add(interval, 'month')) {
          dates.push(date.format('YYYY-MM-DD'));
        }
        break;
      case 'yearly':
        for (let date = start; date.isBefore(end); date = date.add(interval, 'year')) {
          dates.push(date.format('YYYY-MM-DD'));
        }
        break;
      default:
        break;
    }
    return dates;
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-4">Visual Preview</h3>
      <Calendar className='border-4 p-2 font-medium text-center bg-red-400 text-border-solid ' 
        onChange={onDateChange}
        tileClassName={({ date }) => {
          const recurringDates = generateRecurringDates();
          return recurringDates.includes(dayjs(date).format('YYYY-MM-DD')) ? 'react-calendar__tile--highlighted' : null;
        }}
      />
    </div>
  );
};

export default PreviewCalendar;
