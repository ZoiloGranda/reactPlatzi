import React from 'react';
import PokeApp from './components/PokeApp';

var pokemons = [
  {number:1, name:'Bulbasaur'},
  {number:2, name:'Ivysaur'},
  {number:3, name:'Venusaur'}
]


React.render(
  <PokeApp pokemons={pokemons} />,
  document.getElementById('container')
)