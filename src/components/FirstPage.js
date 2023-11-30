// FirstPage.js

import React, { useState } from 'react';
import './FirstPage.css'; // Import the stylesheet

const FirstPage = ({ handleButtonClick }) => {
  const [buttonsData] = useState(['dhiva','arun' , 'kanagaraj','rupesh'] );

  return (
    <div className="first-page">
      <h1>Your Select Any </h1>
      {/* First Page Buttons */}
      <div className="button-container">
        {buttonsData.map((buttonNumber) => (
          <button
            key={buttonNumber}
            onClick={() => handleButtonClick(buttonNumber)}
            className="custom-button"
          >
             {buttonNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FirstPage;
