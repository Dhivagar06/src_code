

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';


const App = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonNumber) => {

    if (selectedButtons.includes(buttonNumber)) {
      setSelectedButtons((prevButtons) => prevButtons.filter((btn) => btn !== buttonNumber));
    } else {
      setSelectedButtons((prevButtons) => [...prevButtons, buttonNumber]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage handleButtonClick={handleButtonClick} />} />
        <Route path="/secondpage" element={<SecondPage selectedButtons={selectedButtons} />} />
      </Routes>
    </Router>
  );
};

export default App;