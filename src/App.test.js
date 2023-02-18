import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Occasion present', () => {
  render(<BookingForm />);
  const mockElement = screen.getByText("Occasion");
  expect(mockElement).toBeInTheDocument();
});
