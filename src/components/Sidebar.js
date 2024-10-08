import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/moonsea">MoonSea</Link>
      <Link to="/tokenomics">Tokenomics</Link>
      <Link to="/moonshot">Moonshot</Link>
      {/* Add more links as needed */}
    </aside>
  );
}

export default Sidebar;
