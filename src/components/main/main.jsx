import React, { useState, useEffect } from 'react';
import './main.css';
import productData from '../productdetails';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import ToastNotification from '../ToastNotification/ToastNotification';

const Main = ({ sortOrder }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true); 
      setTimeout(() => {
        const sortedData = [...productData].sort((a, b) => {
          return sortOrder === 'low-to-high'
            ? a.offerprice - b.offerprice
            : b.offerprice - a.offerprice;
        });
        setProductList(sortedData);
        setLoading(false);
      }, 1500);
    };

    loadProducts();
  }, [sortOrder]);

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="product-grid">
      {loading ? (
        <SkeletonLoader />
      ) : (
        productList.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="product-image" />
            <p className="product-name">{item.name}</p>
            <div className="price">
              <span className="offer-price">₹{item.offerprice}</span>
              <s className="original-price">₹{item.orginalPrize}</s>
            </div>
            <button className="cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        ))
      )}
      {showToast && <ToastNotification />}
    </div>
  );
};

export default Main;
