// import React, { useState, useEffect} from 'react';
// import './main.css';
// import productData from '../productdetails';
// import { FaStar, FaRupeeSign } from 'react-icons/fa';


// export const Main=()=>{  
//   const [productList, setProductList] = useState([]);
 
//   useEffect(() => {
//     const offerProducts = productData.filter(item => item.category === 'men');
//     console.log(offerProducts)
//     setProductList(offerProducts);
//   }, []);

//   return(
//     <div>
//     <div className="product">
//       {productList.map((item,index) => (
//         <div className='cards' key={index}>
//           <img src={item.image} alt={item.name} />
//           <p className='Pname'>{item.name}</p>
//           <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
//           <div className='Pr_price'>
//             <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
//             <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
//           </div>
//           <div className="cart">
//             <button className='cart_btn' >Add to cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   )
// }

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
      setTimeout(() => {
        const sortedData = [...productData].sort((a, b) => {
          return sortOrder === 'low-to-high'
            ? a.offerprice - b.offerprice
            : b.offerprice - a.offerprice;
        });
        setProductList(sortedData);
        setLoading(false);
      }, 1500); // Simulate loading time
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
