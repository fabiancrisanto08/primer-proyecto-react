import React from 'react';
import '../styles/Jugadores.css';

const imagenes = import.meta.glob('../assets/*.png', { 
    eager: true, 
    import: 'default' 
});

export default function Jugadores({ nombre, pais, posicion, club, testimonio, imagen, index }) {
    const urlImagen = imagenes[`../assets/${imagen}.png`];

    return (
        <div 
            className="contenedor-jugadores"
            style={{ '--i': index }} // Mantiene la animación de entrada escalonada
        >
            <img src={urlImagen} alt={nombre} className="imagen-jugadores" />
            
            <div className="contenedor-texto-jugadores">
                <span className="club-pais-tag">{club} • {pais}</span>
                <h3 className="nombre-jugadores">{nombre}</h3>
                <span className="posicion-jugadores">{posicion}</span>
                
                <p className="texto-jugadores">
                    {testimonio}
                </p>
            </div>
        </div>
    );
}