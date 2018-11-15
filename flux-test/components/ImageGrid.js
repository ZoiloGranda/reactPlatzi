import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/ImageStore';

let ImageGrid = React.createClass({
  getInitialState: function() {
    return {imagestore: ''};
  },
  mixins: [Reflux.listenTo(ImageStore,"onStatusChange")],//cuando el ImageStore dispara un evento, se ejecuta
  // la funcion onStatusChange, que es la que actualiza el state del component con las nuevas imagenes
  onStatusChange: function(status) {
    this.setState({
      imagestore: status
    });
  },
  render:function(){
    if (this.state.imagestore){
      return <div>
      {
        this.state.imagestore.map((image)=>{
          return <div className='image'>
          <a href={image.link}>
          <img src={image.media.m}/>
          </a>
          </div>
        })
      }
      </div>
    }else {
      return <p>No hay imagenes disponibles</p>
    }
  }
})

export default ImageGrid;