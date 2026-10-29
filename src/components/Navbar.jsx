import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ setVista }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">⚽ Futbolistas <span>Ultimate</span></div>
            <ul className="navbar-links">
                <li><button onClick={() => setVista('jugadores')} className="nav-link-btn">Jugadores</button></li>
                <li><button onClick={() => setVista('historia')} className="nav-link-btn">Historia</button></li>
            </ul>
        </nav>
    );
}