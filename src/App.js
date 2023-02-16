import './App.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  return (
    <ChakraProvider>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </ChakraProvider>
  )
}

export default App;
