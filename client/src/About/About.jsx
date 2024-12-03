import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <video autoPlay loop muted className="aboutus-video">
        <source src="/about video.mp4" type="video/mp4" />
      </video>
      <h1>About Us</h1>
      <p>
        Welcome to our restaurant recommendation app! We are passionate about helping you find the best dining experiences tailored to your taste preferences. Whether you're a foodie seeking new adventures or someone looking for a reliable place to eat, we've got you covered.
      </p>
      <p>
        Our journey began with a simple idea: to connect people with great food. We believe that food is more than just sustenance; it’s an experience that brings people together, fosters community, and creates memories. From cozy family-owned restaurants to trendy urban eateries, our platform aims to make the process of discovering new restaurants seamless and enjoyable.
      </p>
      <p>
        Our mission is to provide a personalized dining experience for every user. By leveraging advanced algorithms and real-time location data, we ensure that our recommendations are not just relevant but also tailored to your exact preferences. Whether you're craving Italian, Chinese, Indian, or any other cuisine, our app will help you find the perfect spot nearby.
      </p>
      <p>
        We are a team of food enthusiasts, tech experts, and customer service professionals who are committed to making your dining experience better every day. We continuously work on improving our platform by incorporating user feedback, exploring new culinary trends, and enhancing our technology.
      </p>
      <p>
        At the heart of our service is a dedication to quality and user satisfaction. We take pride in curating a list of restaurants that not only serve delicious food but also offer a great atmosphere and excellent service. We believe that a good meal is a gateway to a happier, more connected life.
      </p>
      <p>
        Thank you for choosing us as your trusted partner in your culinary explorations. We look forward to serving you and helping you discover the best dining experiences around!
      </p>
    </div>
  );
};

export default AboutUs;
