import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple title" />
      </main>
      <header className="App-header">
        <img src="cubes.gif" alt="cubes" />
        <p>THIS IS MY FIRST WEBSITE USING REACT!</p>
      </header>
    </div>
  );
}

export default App;
