import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let ImageStore = Reflux.createStore({
  url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json',
  listenables:[ImageActions], //array de acciones a las que se suscribe el store, 
  //en este caso se suscribe a todas las acciones del ImageActions
  imageList:[],
  init: function(){//cuando se inicializa ejecuta esta funcion
    this.fetchList();
  },
  fetchList: function () {// cuando se ejecute un fetchList, va a ejecutar esta funcion
    let tags = ['animals', 'nature', 'food', 'travel', 'cars', 'sport'];
    let randomTag = tags[Math.floor(Math.random()*tags.length)]
    $.ajax({
      url: `${this.url}&tag=${randomTag}`,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function (data){
        console.log('fecth ok');
        console.log({data});
        this.imageList = data.items;
        this.trigger(this.imageList)//trigger dispara un nuevo evento del ImageStore,
        // y envia el nuevo listado de imagenes. Esto es lo que escucha el component de react para actualizarse
        
      }
    })
  }
})

export default ImageStore;