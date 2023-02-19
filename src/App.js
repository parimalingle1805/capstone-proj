import './App.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import { Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';
import { useState } from 'react';

function App() {
  const [availableTime, setAvailableTime] = useState("");

  return (
    <ChakraProvider>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/bookingPage'
          element={<BookingPage availableTime={availableTime} setAvailableTime={setAvailableTime} />}
        />
          <Route
            path='/bookingConfirmation'
            element={<ConfirmedBooking availableTime={availableTime} setAvailableTime={setAvailableTime} />}
        />
      </Routes>
      <Footer />
    </ChakraProvider>
  )
}

export default App;
