import { useLocation } from 'react-router-dom';


const Detail = (props) =>  {
    //let id = JSON.stringify(props);
    //let name = this.props.match.params.name;
    const location = useLocation();
    console.log(`location: ${location}`)
    const {choosenPokemonName} = location.state;
    console.log(`choosenPokemonName: ${choosenPokemonName}`)
    
    
        //console.log(`id: ${JSON.stringify(this.props)  }`)
        //let name = this.props.match.params.id;

        //let params = useParams();
        //console.log(params);
        return (
            <div>
                <br/>
                <br/>
                Name: {props.singlePokemon.name} <br/>
                ID: {props.singlePokemon.id}<br/>        
                <img src={props.singlePokemon.image}/>                
    
            </div>
        )
    

}
export default Detail

/*
Where am I?
- I can link to a dyanmic URL: https://www.codegrepper.com/code-examples/javascript/react+router+dom+dynamic+routing+on+button
- but i can't get a value from that dynamic URL
  - example calls compponent, which is a function rather than class, then useParams (which seems to be a hook)
  - there is something about element vs component that I don't understand
  - Detail is a class; this.props is emppty

  - I there is a way to do this through state.

*/