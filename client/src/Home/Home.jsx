import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

const Home = () => {
  const [cuisine, setCuisine] = useState('Italian');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => console.error('Error fetching location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const handleCuisineClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="home-container">
      <video autoPlay muted loop id="myVideo">
        <source src="/background video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>Welcome to Tasty-Track</h1>
        <p>Discover the best cuisine-specific restaurant recommendations tailored just for you!</p>
        <div className="content-overlay">
          <h2>Choose a Cuisine:</h2>
          <button onClick={handleCuisineClick}>Italian</button>
          <button onClick={handleCuisineClick}>Chinese</button>
          <button onClick={handleCuisineClick}>Indian</button>
          <button onClick={handleCuisineClick}>Mexican</button>
          <button onClick={handleCuisineClick}>American</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
