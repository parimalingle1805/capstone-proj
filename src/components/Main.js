import {React} from 'react';
import {
  Box, Button, Grid, GridItem,
 } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        width='97%'
        height='50%'
        bg='green.500'
        p={2}
        m={5}
      >
        <Grid
          h='100%'
          templateRows='repeat(4, 1fr)'
          ml='5%'
        >
          <GridItem color='yellow.300' fontSize='4xl'> Little Lemon</GridItem>
          <GridItem color='white' fontSize='2xl'> Mexico</GridItem>
          <GridItem color='white' fontSize='2xl'>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern
            twist.
          </GridItem>
          <GridItem>
            <Button bg='yellow.300'>
              <Link to="/bookingPage">Reserve a table</Link>
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Main;