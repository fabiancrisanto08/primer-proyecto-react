import './App.css';
import Navbar from './components/navbar';
import Jugadores from './components/Jugadores';

function App() {
  const listaJugadores = [
    {
      nombre: "Jude Bellingham",
      pais: "Inglaterra",
      posicion: "Mediocampista",
      club: "Real Madrid",
      testimonio: "Jude Bellingham es un futbolista inglés que juega como mediocampista para el Real Madrid y la selección de Inglaterra. Es conocido por su habilidad, visión de juego y capacidad para marcar goles desde el mediocampo.",
      imagen: "Jude",
      ovr: 92
    },
    {
      nombre: "Cristiano Ronaldo",
      pais: "Portugal",
      posicion: "Delantero",
      club: "Al Nassr",
      testimonio: "Cristiano Ronaldo es un futbolista portugués que juega como delantero para el Al Nassr y la selección de Portugal. Uno de los mejores jugadores de todos los tiempos, talvez el mejor, pero sin duda es excepcional en su campo y tiro.",
      imagen: "Cristiano",
      ovr: 94
    },
    {
      nombre: "Zinedine Zidane",
      pais: "Francia",
      posicion: "Mediocampista",
      club: "Retirado",
      testimonio: "Zinedine Zidane es un ex-futbolista francés que jugó como mediocampista para el Real Madrid y la selección de Francia. Es conocido por su habilidad con el balón y sobre todo por la elegancia en el juego.",
      imagen: "Zidane",
      ovr: 96
    },
    {
      nombre: "Adriano Leite Ribeiro",
      pais: "Brasil",
      posicion: "Mediocampista",
      club: "Retirado",
      testimonio: "Adriano Leite Ribeiro considerado uno de los delanteros brasileños más mortíferos de la década del 2000 y uno de los mejores jugadores del mundo, gracias a su técnica en velocidad, y a su potente y efectivo remate de zurda..",
      imagen: "Adriano",
      ovr: 91
    },
    {
      nombre: "Lionel Messi",
      pais: "Argentina",
      posicion: "Delantero",
      club: "Inter Miami",
      testimonio: "Lionel Messi es un futbolista argentino que juega como delantero para el Inter Miami y la selección de Argentina. Considerado uno de los mejores jugadores de todos los tiempos, conocido por su habilidad, visión de juego y capacidad para marcar goles.",
      imagen: "Messi",
      ovr: 95
    }
  ];

  return (
    <div className="App">
      <Navbar />
      {listaJugadores.map((jugador, index) => (
        <Jugadores
          key={index}
          index={index}
          {...jugador}
        />
      ))}
    </div>
  );
}

export default App;