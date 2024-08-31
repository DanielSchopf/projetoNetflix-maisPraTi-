import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/Navbar.css';
import logo from '../pages/images/netflix-logo.png';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Netflix Logo" className="navbar-logo"/>
      <div className="navbar-links">
        <a href="/home" className="navbar-link">Início</a>
        <a href="/home#Series" className="navbar-link" onClick={(e) => handleScroll(e, 'Series')}>Séries</a>
        <a href="/home#Popular" className="navbar-link" onClick={(e) => handleScroll(e, 'Popular')}>Bombando</a>
        <button className="navbar-link logout-button" onClick={handleLogout}>Sair</button>
      </div>
      <input type="text" placeholder="Títulos, gente e gêneros" className="navbar-search" value={searchQuery} onChange={handleInputChange} onKeyPress={handleSearch}/>
    </nav>
  );
}

export default Navbar;
