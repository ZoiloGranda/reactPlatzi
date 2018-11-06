import pokemons from './pokemons';

export default {
  pokemons:{
    find:function(callback){
      //timeout falso para simular la peticion a la API
      setTimeout(()=> {
        callback(pokemons)
      }, 3000);
      
    }
  }
}