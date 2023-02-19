import React from 'react';
import {
  Flex,
  Image,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <>
      <Flex width='100%' bg='green.500'>
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7f_wmjvUsEI56fK9tEjONXcqqHFz6dK7nIg&usqp=CAU'
          alt='Little Lemon Logo'
          boxSize='6%'
          p={2}
          borderRadius='50px'
        />
        <Center ml={10} color='white' fontSize='2xl'>
          <Link to="/">Home</Link>
        </Center>
      </Flex>
    </>
  )
}

export default Nav;