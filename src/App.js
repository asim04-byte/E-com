// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavbarComponent from './components/navbar/navbar';
// import './App.css';
// import { Main } from './components/main/main';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* Navbar will always be displayed */}
//         <NavbarComponent />

//         {/* Main content */}
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Main/>} />
//             {/* Add more routes as needed */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import './App.css';
import NavbarComponent from './components/navbar/navbar';
import Main from './components/main/main';
const App = () => {
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="app">
      <NavbarComponent onSort={handleSortChange} />
      <Main sortOrder={sortOrder} />
    </div>
  );
};

export default App;
