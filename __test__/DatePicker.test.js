// __test__/DatePicker.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePicker from '../components/DatePicker/DatePicker';

test('renders DatePicker component and its children', () => {
  render(<DatePicker />);
  
  expect(screen.getByText(/Date Picker/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Recurrence Options/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Set Recurrence/i })).toBeInTheDocument();
});
