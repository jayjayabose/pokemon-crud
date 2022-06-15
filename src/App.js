import React from 'react';
import { getPokemonByName } from './utils/helper';
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

  componentDidMount() {
    // fetch Youtube videos
  }

  render() {
    return (
      <div className="App">
        <header>My Pokedex</header>
        <div className="pokedex">
          {this.state.myPokemon.map(({ id, name, image }) => {
            return (
              <div key={id} className="pokemon">
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
