import React from 'react';
import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Button,
    NumberInput,
    NumberInputField,
    // NumberInputStepper,
    // NumberIncrementStepper,
    // NumberDecrementStepper,
    Select,
    Box,
    Input,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    // const [availableTime, setAvailableTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log("Today: " + today);



    const handleSubmit = () => {

    };
  return (
    <>
        <Box m={5}>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Date</FormLabel>
                    <Input value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                            console.log(e.target.value);
                        }}
                        type='date'
                        min={today}
                    />
                    <FormControl isRequired>
                    <FormLabel>Time slots available</FormLabel>
                        <Select placeholder='Select time'
                            value={props.availableTime}
                            onChange={(e) => {
                                props.setAvailableTime(e.target.value);
                                console.log(e.target.value);
                            }}
                            >
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Number of Guests (min:1, max:50)</FormLabel>
                        <NumberInput max={50} min={1}>
                            <NumberInputField
                                value={guests}
                                onChange={(e) => {
                                    setGuests(e.target.value);
                                    console.log(e.target.value);
                                }}
                            />
                            {/* <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper> */}
                        </NumberInput>
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Occasion</FormLabel>
                        <Select placeholder='Select occasion'
                            value={occasion}
                            onChange={(e) => {
                                setOccasion(e.target.value);
                                console.log(e.target.value);
                            }}
                            >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Select>
                    </FormControl>
                    <Button type='submit' m={4} colorScheme='blue'>
                        <Link to="/bookingConfirmation">Reserve</Link>
                    </Button>
                </FormControl>
            </form>
        </Box>
    </>
  );
};

export default BookingForm;