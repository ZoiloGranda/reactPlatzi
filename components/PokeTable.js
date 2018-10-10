import React from 'react';
import PokeRow from './PokeRow'

export default class PokeTable extends React.Component{
  render(){
    return <ul className="poketable">
    {
      this.props.pokemons.map((pokemon)=>{
          return <PokeRow 
          key={pokemon.number} 
          name={pokemon.name} 
          number={pokemon.number}
          //la funcion growl que se le pasa desde PokeApp
          growl={this.props.onGrowl}/>
      })
    }
    </ul>
  }
}