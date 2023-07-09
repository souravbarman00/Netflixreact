import React from 'react';
import "./Style/Header.scss";
import {Link} from "react-router-dom";
import Home from './Home';
import {GoSearch} from "react-icons/go"

const Header = () => {
  return (
    <nav className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
        <div className='Pages'>
            <Link to="/" element={<Home/>}>Home</Link>
            <Link to="/tv" element={<Home/>}>TV Shows</Link>
            <Link to="/movie" element={<Home/>}>Movies</Link>
            <Link to="/new" element={<Home/>}>New & Popular</Link>
            <Link to="/list" element={<Home/>}>My List</Link>
            <Link to="/browse" element={<Home/>}>Browse by Lamguage</Link>
        </div>
        <GoSearch/>
    </nav>
  )
}

export default Header