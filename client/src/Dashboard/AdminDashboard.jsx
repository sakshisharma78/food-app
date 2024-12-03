import { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cuisine: '',
    price: ''
  });
  
  const [dishData, setDishData] = useState({
    dishName: '',
    dishPrice: '',
    dishImage: null
  });

  const [imageFile, setImageFile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: '',
    password: ''
  });
  
  const [restaurants, setRestaurants] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDishChange = (e) => {
    setDishData({ ...dishData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleCredentialsChange = (e) => {
    setAdminCredentials({ ...adminCredentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = adminCredentials;

    if (username === 'sakshi' && password === 'radhe111') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  const handleRestaurantSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('cuisine', formData.cuisine);
    formDataToSend.append('price', formData.price);

    if (imageFile) {
      formDataToSend.append('imageUpload', imageFile);
    }

    try {
      const response = await fetch('http://localhost:5000/api/admin/add/restaurants', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to add restaurant');
      }

      await response.json();
      alert('Restaurant added successfully');
      setFormData({ name: '', address: '', cuisine: '', price: '' });
      setImageFile(null);
      fetchRestaurants(); // Fetch restaurants again after adding a new one
    } catch (error) {
      console.error('There was an error adding the restaurant!', error);
      alert('Error adding restaurant!');
    }
  };

  const handleDishSubmit = async (e) => {
    e.preventDefault();
    const dishFormData = new FormData();
    dishFormData.append('dishName', dishData.dishName);
    dishFormData.append('dishPrice', dishData.dishPrice);

    if (dishData.dishImage) {
      dishFormData.append('imageUpload', dishData.dishImage);
    }

    try {
      const response = await fetch('http://localhost:5000/api/admin/add/dishes', {
        method: 'POST',
        body: dishFormData,
      });

      if (!response.ok) {
        throw new Error('Failed to add dish');
      }

      await response.json();
      alert('Dish added successfully');
      setDishData({ dishName: '', dishPrice: '', dishImage: null });
    } catch (error) {
      console.error('There was an error adding the dish!', error);
      alert('Error adding dish!');
    }
  };

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/restaurants');
      if (!response.ok) throw new Error('Failed to fetch restaurants');
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchRestaurants();
    }
  }, [isAuthenticated]);

  return (
    <div className="admin-dashboard">
      <video autoPlay muted loop id="myVideo">
        <source src="admin video.mp4" type="video/mp4" />
      </video>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="auth-form">
          <h1>Admin Login</h1>
          <input
            type="text"
            name="username"
            placeholder="Admin Username"
            value={adminCredentials.username}
            onChange={handleCredentialsChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Admin Password"
            value={adminCredentials.password}
            onChange={handleCredentialsChange}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div className="form-container">
          <h1>Add Restaurant</h1>
          <form onSubmit={handleRestaurantSubmit} encType="multipart/form-data" className="data-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cuisine"
              placeholder="Cuisine"
              value={formData.cuisine}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />
            <input
              type="file"
              name="imageUpload"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button type="submit">Add Restaurant</button>
          </form>

         

          
         
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
