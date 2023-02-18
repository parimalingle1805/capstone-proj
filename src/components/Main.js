import {React, useState} from 'react';
import BookingPage from './BookingPage';

const Main = () => {
  const [availableTime, setAvailableTime] = useState("");
  return (
    <>
      <BookingPage availableTime={availableTime} setAvailableTime={setAvailableTime} />
    </>
  );
};

export default Main;