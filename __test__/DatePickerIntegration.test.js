// __test__/DatePickerIntegration.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import DatePicker from '../components/DatePicker/DatePicker';

const store = createStore(rootReducer);

test('DatePicker component interacts with RecurrenceInputs and RecurrenceOptions', () => {
  render(
    <Provider store={store}>
      <DatePicker />
    </Provider>
  );

  // Check if DatePicker component is rendered
  expect(screen.getByText(/Date Picker/i)).toBeInTheDocument();

  // Interact with RecurrenceInputs
  const intervalInput = screen.getByLabelText(/Interval/i);
  fireEvent.change(intervalInput, { target: { value: '7' } });
  expect(intervalInput).toHaveValue('7');

  // Select a recurrence option
  const dailyOption = screen.getByText(/Daily/i);
  fireEvent.click(dailyOption);
  expect(dailyOption).toHaveClass('selected'); // Assuming you have a class for selected options
});
