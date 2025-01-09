// import React, { useState } from 'react';
// import './navbar.css';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const NavbarComponent = ({ isAuthenticated }) => {
//   const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown visibility

//   const handleSort = (order) => {
//     console.log(`Sorting: ${order}`); // Replace this with your actual sorting logic
//     setShowDropdown(false); // Close dropdown after selecting an option
//   };

//   return (
//     <div className="nav_bar">
//       <div className="nav_container">
//         <div className="nav_left">
//           <div className="brand">
//             <p className="name">SHOPPER</p>
//           </div>
//           <ul className="nav_menu">
//             <li>
//               <button
//                 className="sort_button"
//                 onClick={() => setShowDropdown(!showDropdown)}
//               >
//                 Sort
//               </button>
//               {showDropdown && (
//                 <div className="dropdown_menu">
//                   <p onClick={() => handleSort("lower-to-higher")}>Lower to Higher</p>
//                   <p onClick={() => handleSort("higher-to-lower")}>Higher to Lower</p>
//                 </div>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarComponent;

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
        <button className="sort_button" onClick={() => setShowDropdown(!showDropdown)}>
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
