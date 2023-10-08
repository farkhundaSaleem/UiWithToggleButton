import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './Navbar';
import './App.css';
import Button from '@mui/material/Button';

const App = () => {
  const [isDaytime, setIsDaytime] = useState(false);

  useEffect(() => {
    document.body.className = isDaytime ? 'daytime' : 'nighttime';
  }, [isDaytime]);

  const toggleBackground = () => {
    setIsDaytime(!isDaytime);
  };

  const containerClassName = isDaytime ? 'main-container daytime' : 'main-container nighttime';

  const buttonText = isDaytime ? 'Dark Mode' : 'Light Mode';
  return (
    <>
      <ResponsiveAppBar />
      <div className={containerClassName}>
        <div className="round-picture"></div>
        <div className="description">
          <h2>Farkhunda Saleem</h2>
          <p>Front-End Web Developer</p>
          <p>Passionate about creating interactive web experiences.</p>
          <p>Here I used useState Hook to Toggle button</p>
          <br />
          <h4>Click here to enable</h4>
          <div>
            <Button variant="contained" onClick={toggleBackground}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

