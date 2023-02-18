import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = (props) => {
  return (
    <>
      <BookingForm availableTime={props.availableTime} setAvailableTime={props.setAvailableTime} />
    </>
  );
};

export default BookingPage;