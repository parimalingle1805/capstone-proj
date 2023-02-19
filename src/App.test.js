import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Occasion present', () => {
  render(<BookingForm />);
  const mockElement = screen.getByText("Occasion");
  expect(mockElement).toBeInTheDocument();
});

test('availableTimes', () => {
  render(<BookingForm />);
  const availableTime = screen.getByText("17:00");
  fireEvent.click(availableTime);
  expect(availableTime).toBeInTheDocument();
});