import React from 'react';
import PokeApp from './components/PokeApp';


//lo principal para renderizar la app de react, en cual elemento del DOM se va
//a renderizar el componente padre de todos
React.render(
  <PokeApp/>,
  document.getElementById('container')
)