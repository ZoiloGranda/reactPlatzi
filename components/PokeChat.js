import React from 'react';
import PokeMessage from './PokeMessage'

export default class PokeChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages:[] }
  }
  render(){
    return <ul className="PokeChat">
    {
      this.state.messages.map((message)=>{
          return <PokeMessage message={message}/>
      })
    }
    </ul>
  }
}