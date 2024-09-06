

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setRecurrence, setInterval } from '../../store/dateSlice';

const RecurrenceOptions = () => {
  const dispatch = useDispatch();
  const { recurrence, interval } = useSelector(state => state.date);

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Recurrence Pattern</label>
      <select
        value={recurrence}
        onChange={(e) => dispatch(setRecurrence(e.target.value))}
        className='form-select mt-1 block w-full p-2 border border-gray-300 rounded-md'
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <label className="block mt-4 mb-2">Interval</label>
      <input
        type="number"
        value={interval}
        onChange={(e) => dispatch(setInterval(Number(e.target.value)))}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default RecurrenceOptions;
