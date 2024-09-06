// __test__/RecurrenceOptions.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import RecurrenceOptions from '../components/DatePicker/RecurrenceOptions';

test('renders RecurrenceOptions component with correct options', () => {
  render(<RecurrenceOptions />);
  
  expect(screen.getByText(/Daily/i)).toBeInTheDocument();
  expect(screen.getByText(/Weekly/i)).toBeInTheDocument();
  expect(screen.getByText(/Monthly/i)).toBeInTheDocument();
  expect(screen.getByText(/Yearly/i)).toBeInTheDocument();
});
