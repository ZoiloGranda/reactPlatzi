import React from 'react';
import PokeRow from './PokeRow'

export default class PokeApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {messages:[] }
  }
  onGrowl(name){
    var text = `${name}, ${name}!`
    var messages = this.state.messages.push({text:text})
    this.setState({messages:messages})
  }
  render(){
    var pokemons = [
      {number:1, name:'Bulbasaur'},
      {number:2, name:'Ivysaur'},
      {number:3, name:'Venusaur'}
    ]
    
    return <div className="PokeTable">
    <PokeTable pokemons={pokemons}/>
    <PokeChat messages={this.state.messages}/>
  }
}