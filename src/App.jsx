import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div style={{ marginTop: '40px' }}>
            <AboutUs />
          </div>
        </div>
      ) : (
        <div className="product-list-container">
          {/* Product Listing view placeholder */}
          <nav className="navbar">
            <h2 onClick={() => setShowProductList(false)} style={{ cursor: 'pointer' }}>Paradise Nursery</h2>
            <div>
              <span onClick={() => setShowProductList(false)} style={{ marginRight: '20px', cursor: 'pointer' }}>Home</span>
              <span style={{ marginRight: '20px', cursor: 'pointer' }}>Plants</span>
              <span style={{ cursor: 'pointer' }}>Cart</span>
            </div>
          </nav>
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Product Listing Page Coming Soon</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
