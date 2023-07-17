import React from 'react';
import Navabar from "./Components/Navabar"
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
