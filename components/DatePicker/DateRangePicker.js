// components/DatePicker/DateRangePicker.js
import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate } from '../../store/dateSlice';

const DateRangePicker = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(state => state.date);

  return (
    <div>
      <div className="mb-4">
        <label className="text-lg font-bold mb-2">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => dispatch(setStartDate(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="text-lg font-bold mb-2">End Date (Optional)</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => dispatch(setEndDate(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
