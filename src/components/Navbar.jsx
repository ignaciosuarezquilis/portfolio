// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <ul className="nav-list">
        <li className="nav-item"><a href="#home" className="nav-link">Inicio</a></li>
        <li className="nav-item"><a href="#about-me" className="nav-link">Sobre mí</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">Proyectos</a></li>
        <li className="nav-item"><a href="#skills" className="nav-link">Habilidades</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
