import React from "react";
import '../styles/Navbar.css';  

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">⚽ Futbolistas <span>Ultimate</span></div>
            <ul className="navbar-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#jugadores">Jugadores</a></li>
            </ul>
        </nav>
    );
}