
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
