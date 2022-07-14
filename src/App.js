import React from 'react';
import { getPokemonByName } from './utils/helper';
import New from './component/New';
import Pokedex from './component/Pokedex';
import Detail from './component/Detail';
import {Link, Route, Routes} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myPokemon: [
        getPokemonByName('chansey'),
        getPokemonByName('jigglypuff'),
        getPokemonByName('ekans'),
      ],
      chosenPokemon: getPokemonByName('ekans'),
    };
  }

  componentDidMount() {
    // fetch Youtube videos
  }

  addPokemon = (chosenPokemon) => {
    console.log(`chosenPokemon: ${chosenPokemon}`)
    let foundPokemon = getPokemonByName(chosenPokemon);
    let newPokemon = [... this.state.myPokemon, foundPokemon];
    this.setState({ myPokemon: newPokemon })
  }

  render() {
    console.log(this.state.myPokemon);
    return (
      <div className="App">        
        <header>My Pokedex</header>
        <div className='navVar'>
            <Link to="/">Home</Link><br/>
            <Link to="/new">New</Link>
        </div>
        <Routes>
          <Route path = "/" element={<Pokedex myPokemon={this.state.myPokemon}/>}/>
          <Route path = "/new" element={<New addPokemon={this.addPokemon}/>}/>            
          <Route path="/detail" element={<Detail name={this.chosenPokemon} />} />          
        </Routes>  
      </div>
    );
  }
}

export default App;
