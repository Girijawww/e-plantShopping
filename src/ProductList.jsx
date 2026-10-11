import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", price: 15, description: "Produces oxygen at night, improving indoor air quality." },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12", price: 12, description: "Resilient plant that filters indoor toxins effectively." },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2018/02/22/11/24/peace-lily-3173372_1280.jpg", cost: "$18", price: 18, description: "Beautiful white blooms and excellent air-purifying qualities." },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/06/25/11/19/fern-5339234_1280.jpg", cost: "$14", price: 14, description: "Adds lush green foliage and acts as a natural humidifier." },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/03/10/16/09/plant-4919597_1280.jpg", cost: "$20", price: 20, description: "Features large, glossy leaves and removes toxins efficiently." },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/09/15/45/aloe-vera-3304918_1280.jpg", cost: "$10", price: 10, description: "Succulent with medicinal properties and easy maintenance." }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/04/18/16/03/lavender-2238914_1280.jpg", cost: "$20", price: 20, description: "Calming scent, perfect for relaxation and sleep." },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2016/08/29/18/43/jasmine-1628793_1280.jpg", cost: "$18", price: 18, description: "Sweet fragrance that blooms during the evening." },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2016/06/21/20/35/rosemary-1471714_1280.jpg", cost: "$15", price: 15, description: "Aromatic herb with needle-like leaves and culinary uses." },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/09/10/17/17/mint-1659727_1280.jpg", cost: "$10", price: 10, description: "Refreshing fragrance and great for herbal teas." },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/07/16/16/07/lemon-balm-4341512_1280.jpg", cost: "$12", price: 12, description: "Citrus-scented leaves that soothe and refresh." },
        { name: "Geranium", image: "https://cdn.pixabay.com/photo/2018/05/01/16/32/geranium-3366060_1280.jpg", cost: "$16", price: 16, description: "Vibrant flowers with a pleasant rose-like aroma." }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/04/07/15/48/zz-plant-6159155_1280.jpg", cost: "$22", price: 22, description: "Thrives in low light and requires minimal watering." },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2017/02/15/10/39/plants-2068219_1280.jpg", cost: "$14", price: 14, description: "Hardy trailing vine that adapts to almost any indoor space." },
        { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2018/11/15/19/27/plant-3818318_1280.jpg", cost: "$25", price: 25, description: "Virtually indestructible foliage plant for dim corners." },
        { name: "Succulent Mix", image: "https://cdn.pixabay.com/photo/2016/11/21/15/55/succulents-1846142_1280.jpg", cost: "$10", price: 10, description: "Assorted small drought-tolerant succulents." },
        { name: "Cactus", image: "https://cdn.pixabay.com/photo/2016/04/01/10/10/cactus-1299949_1280.jpg", cost: "$12", price: 12, description: "Unique desert plant needing very infrequent water." },
        { name: "Aglaonema", image: "https://cdn.pixabay.com/photo/2021/06/15/14/09/chinese-evergreen-6338871_1280.jpg", cost: "$19", price: 19, description: "Colorful patterned leaves that require minimal attention." }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-list">
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          <h3>Paradise Nursery</h3>
          <p>Where Green Meets Serenity</p>
        </div>
        <div className="navbar-links">
          <span onClick={onHomeClick} style={{ cursor: 'pointer', marginRight: '30px' }}>Home</span>
          <span style={{ cursor: 'pointer', marginRight: '30px' }}>Plants</span>
          <span onClick={onCartClick} style={{ cursor: 'pointer', position: 'relative' }}>
            🛒 Cart ({totalCartCount})
          </span>
        </div>
      </nav>

      <div className="categories-container">
        {plantsArray.map((categoryObj, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{categoryObj.category}</h2>
            <div className="plants-grid">
              {categoryObj.plants.map((plant, pIndex) => (
                <div key={pIndex} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">{plant.cost}</p>
                  <p className="plant-desc">{plant.description}</p>
                  <button
                    className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
