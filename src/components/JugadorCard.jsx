import React, { useState } from 'react';
import './JugadorCard.css'; // Importa los estilos que veremos más abajo

export default function JugadorCard({ nombre, posicion, imagen, descripcion, stats }) {
    // Estado para controlar si está en modo carta FIFA o normal
    const [isFifaMode, setIsFifaMode] = useState(false);

    return (
        <div 
            className={`contenedor-jugadores ${isFifaMode ? 'modo-fifa' : ''}`} 
            onClick={() => setIsFifaMode(!isFifaMode)}
        >
            <img src={imagen} alt={nombre} className="imagen-jugadores" />
            
            <div className="contenedor-texto-jugadores">
                <h3 className="nombre-jugadores">{nombre}</h3>
                <span className="posicion-jugadores">{posicion}</span>
                
                <p className="texto-jugadores">
                    {descripcion}
                </p>

                {/* Estadísticas estilo FIFA */}
                <div className="stats-fifa">
                    <div className="stat-item"><span>PAC</span><strong>{stats.pac}</strong></div>
                    <div className="stat-item"><span>SHO</span><strong>{stats.sho}</strong></div>
                    <div className="stat-item"><span>PAS</span><strong>{stats.pas}</strong></div>
                    <div className="stat-item"><span>DRI</span><strong>{stats.dri}</strong></div>
                    <div className="stat-item"><span>DEF</span><strong>{stats.def}</strong></div>
                    <div className="stat-item"><span>PHY</span><strong>{stats.phy}</strong></div>
                </div>
            </div>
        </div>
    );
}