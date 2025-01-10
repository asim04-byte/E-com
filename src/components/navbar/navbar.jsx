import React, { useState } from 'react';
import './navbar.css';

const NavbarComponent = ({ onSort }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSort = (order) => {
    onSort(order);
    setShowDropdown(false);
  };

  return (
    <div className="nav_bar">
      <div className="nav_container">
        <div className="brand">
          <p className="name">SHOPPER</p>
        </div>
        <button
          className="sort_button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Sort
        </button>
        {showDropdown && (
          <div className="dropdown_menu">
            <p onClick={() => handleSort('low-to-high')}>Price: Low to High</p>
            <p onClick={() => handleSort('high-to-low')}>Price: High to Low</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
