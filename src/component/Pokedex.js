import Detail from './Detail';
import {Routes, Route, Link} from "react-router-dom";

const Pokedex = (props) => {
    //console.log(`pokedex: ${props.myPokemon}`)
    return (        
         <div className="pokedex">
          {props.myPokemon.map(({ id, name, image }) => {
            return (
              <div key={id} className="pokemon">
                <h3>{name}</h3>

                <Link to={{
                    pathname: '/detail',
                    state: {
                        choosenPokemonName: 'ziggy' 
                    }
                }}>
                    <img src={image} alt={name} />
                </Link>
                
              </div>
            );
          })}
        </div>        
    )
};

export default Pokedex;