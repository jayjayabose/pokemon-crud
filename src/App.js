import React from 'react';
import { getPokemonByName } from './utils/helper';
import New from './component/New';
import Pokedex from './component/Pokedex';
import { Link, Route, Routes } from 'react-router-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myPokemon: [
        getPokemonByName('chansey'),
        getPokemonByName('jigglypuff'),
        getPokemonByName('ekans'),
      ],
    };
  }

  addPokemon = (chosenPokemon) => {
    console.log('chosenPokemon =', chosenPokemon);
    let foundPokemon = getPokemonByName(chosenPokemon);
    let newPokemon = [...this.state.myPokemon, foundPokemon];
    this.setState({ myPokemon: newPokemon });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>My Pokedex</header>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/new">New</Link>
        </div>
        <Routes>
          <Route path="/" element={<Pokedex myPokemon={this.state.myPokemon} />} />
          <Route path="/new" element={<New addPokemon={this.addPokemon} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
