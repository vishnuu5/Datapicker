

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSpecificDays, setNthDay, setYearMonth, setYearDay } from '../../store/dateSlice';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const monthsOfYear = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const RecurrenceInputs = () => {
  const dispatch = useDispatch();
  const { recurrence, specificDays, nthDay, yearMonth, yearDay } = useSelector(state => state.date);

  return (
    <div>
      {recurrence === 'weekly' && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Specific Days of the Week</label>
          <div className="flex flex-wrap">
            {daysOfWeek.map(day => (
              <label key={day} className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <input
                  type="checkbox"
                  placeholder="Every X days/weeks/months/years"
                  checked={specificDays.includes(day)}
                  onChange={() => dispatch(setSpecificDays(
                    specificDays.includes(day)
                      ? specificDays.filter(d => d !== day)
                      : [...specificDays, day]
                  ))}
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      )}

      {recurrence === 'monthly' && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nth Day of the Month</label>
          <select
            value={nthDay}
            onChange={(e) => dispatch(setNthDay(Number(e.target.value)))}
            className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value={1}>1st Day</option>
            <option value={2}>2nd Day</option>
            <option value={3}>3rd Day</option>
            <option value={4}>4th Day</option>
            <option value={5}>5th Day</option>
          </select>
        </div>
      )}

      {recurrence === 'yearly' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Month</label>
            <select
              value={yearMonth}
              onChange={(e) => dispatch(setYearMonth(Number(e.target.value)))}
              className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              {monthsOfYear.map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Day of the Month</label>
            <select
              value={yearDay}
              onChange={(e) => dispatch(setYearDay(Number(e.target.value)))}
              className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              {[...Array(31).keys()].map(day => (
                <option key={day + 1} value={day + 1}>{day + 1}</option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default RecurrenceInputs;
