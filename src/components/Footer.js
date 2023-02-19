import React from 'react';
import { Center, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Flex color='white' w='100%' position='fixed' bottom='0'>
        <Center w='100%' h='3em' bg='black'>
          Trademark Little Lemon | 2023
        </Center>
      </Flex>
    </>
  )
}

export default Footer;