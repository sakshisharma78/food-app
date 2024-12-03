import React from 'react';
import { useLocation } from 'react-router-dom';
import './order.css';

const OrderForm = () => {
  const location = useLocation();
  const { dish } = location.state; // Get the dish details passed via navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle order submission
    alert('Order placed successfully!');
  };

  return (
    <div className="admin-dashboard">
      <video autoPlay muted loop id="myVideo">
        <source src="admin video.mp4" type="video/mp4" />
      </video>
    <div className="order-form-container">
      <h2>Order {dish.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea required></textarea>
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="tel" required />
        </div>
        <div className="form-group">
          <label>Price: ₹{dish.price}</label>
        </div>
        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
    </div>
  );
};

export default OrderForm;
