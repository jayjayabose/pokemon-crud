import React from "react";

class New extends React.Component {
    constructor(){
        super();
        this.state = {
            pokemonName : ''
        };
    }
    updatePoke = (event) => {
        console.log(`updatePoke: ${event.target.value}`);
        this.setState(            
            {pokemonName: event.target.value}
        );

    }
    render() {
        console.log(`render`);
        return (
            <div>
                <input type="text" value={this.state.pokemonName} onChange={this.updatePoke}></input>
                 <button onClick={() => this.props.addPokemon(this.state.pokemonName)}> This button adds Pokemon</button>>
            </div>
        )
    }
    
};

export default New;