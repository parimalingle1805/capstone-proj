import { Center } from '@chakra-ui/react';
import React from 'react';

const ConfirmedBooking = (props) => {
  return (
    <>
        <Center color='green.400' fontSize='7xl'>Booking has been confirmed for {props.availableTime}.</Center>
    </>
  )
}

export default ConfirmedBooking;