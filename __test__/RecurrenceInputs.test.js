// __test__/RecurrenceInputs.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import RecurrenceInputs from '../components/DatePicker/RecurrenceInputs';

test('renders RecurrenceInputs component with correct fields', () => {
  render(<RecurrenceInputs />);
  
  expect(screen.getByLabelText(/Interval/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Every X days\/weeks\/months\/years/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Specific days of the week/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/The nth day of the month/i)).toBeInTheDocument();
});
