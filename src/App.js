// import logo from "./logo.svg";
import "./App.css";
import "./Pokemon.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  const all_pokemon = [
    {
      name: "Charizard",
      weight: 90,
      awesome: true,
      terrifying: false,
      abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    },
    {
      name: "Bulbasaur",
      weight: 6.9,
      awesome: true,
      terrifying: false,
      abilities: ["Overgrow", "Chlorophyll"],
    },
    {
      name: "Mewtwo",
      weight: 122,
      awesome: true,
      terrifying: true,
      abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    },
    {
      name: "Mega beedrill",
      weight: 65,
      awesome: false,
      terrifying: true,
      abilities: ["Intimidate", "Unnerve"],
    },
  ];

  return (
    <div className="App">
      <main>
        <div className="App-header">
          <header>My Pokemons</header>
        </div>

        {all_pokemon.map((pokemon) => {
          return (
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          );
        })}
      </main>
      <header className="App-header">
        {/* <img src="cubes.gif" alt="cubes" /> */}
        <p>THIS IS MY FIRST WEBSITE USING REACT!</p>
      </header>
    </div>
  );
}
export default App;
