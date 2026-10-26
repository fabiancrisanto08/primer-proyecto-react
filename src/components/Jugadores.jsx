import React, { useState } from 'react';
import '../styles/Jugadores.css';

const imagenes = import.meta.glob('../assets/*.png', { 
    eager: true, 
    import: 'default' 
});

export default function Jugadores({ nombre, pais, posicion, club, testimonio, imagen, ovr, index }) {
    const [isFifaMode, setIsFifaMode] = useState(false);

    const statsFifa = { pac: 89, sho: 88, pas: 86, dri: 90, def: 70, phy: 82 };
    const urlImagen = imagenes[`../assets/${imagen}.png`];

    return (
        <div 
            className={`contenedor-jugadores ${isFifaMode ? 'modo-fifa' : ''}`} 
            onClick={() => setIsFifaMode(!isFifaMode)}
            style={{ '--i': index }} // Inyectamos el índice para la animación escalonada
        >
            {/* Insignia OVR Flotante (Idea 8) */}
            <div className="ovr-badge">
                <span className="ovr-numero">{ovr}</span>
                <span className="ovr-pos">{posicion.slice(0, 3).toUpperCase()}</span>
            </div>

            <img src={urlImagen} alt={nombre} className="imagen-jugadores" />
            
            <div className="contenedor-texto-jugadores">
                <span className="club-pais-tag">{club} • {pais}</span>
                <h3 className="nombre-jugadores">{nombre}</h3>
                <span className="posicion-jugadores">{posicion}</span>
                
                <p className="texto-jugadores">
                    {testimonio}
                </p>

                <div className="stats-fifa">
                    <div className="stat-item"><span>PAC</span><strong>{statsFifa.pac}</strong></div>
                    <div className="stat-item"><span>SHO</span><strong>{statsFifa.sho}</strong></div>
                    <div className="stat-item"><span>PAS</span><strong>{statsFifa.pas}</strong></div>
                    <div className="stat-item"><span>DRI</span><strong>{statsFifa.dri}</strong></div>
                    <div className="stat-item"><span>DEF</span><strong>{statsFifa.def}</strong></div>
                    <div className="stat-item"><span>PHY</span><strong>{statsFifa.phy}</strong></div>
                </div>
            </div>
        </div>
    );
}