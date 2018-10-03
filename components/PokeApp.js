import React from 'react';
import PokeRow from './PokeRow'

export default class PokeApp extends React.Component{
  growl(){
    
  }
  render(){
    return <ul className="PokeApp">
    {
      this.props.pokemons.map((pokemon)=>{
          return <PokeRow 
          key={pokemon.number} 
          name={pokemon.name} 
          number={pokemon.number}
          growl={this.growl.bind(this)}/>
      })
    }
    </ul>
  }
}