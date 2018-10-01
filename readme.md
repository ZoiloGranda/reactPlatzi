## Ejecutar
1. `npm install`
2. `npm run build`
3. Abrir `ejemplo.html` en el navegador

## Componentes
Se crean de forma distinta si se usa ES5 o ES6. Los `propTypes` son validaciones que no son obligatorias. El metodo `render` de cada componente, es el que contiene como tal lo que se va a mostrar en la vista
```js
//asi se crea un componente con ES5
var HelloWorldComponent = React.createClass({
  propTypes:{
    name: React.PropTypes.string,
    level: React.PropTypes.number
  },
  render:function() {
    return <h1>{this.props.name} es level {this.props.level}</h1>
  }
})
```

```js
//asi se crea un componente con ES6
class HelloWorldComponent extends React.Component{
  render() {
    return <h1>{this.props.name} es level {this.props.level}</h1>
  }
}
HelloWorldComponent.propTypes={
  name: React.PropTypes.string,
  level: React.PropTypes.number
}
```
## React.render()

Despues de crear el componente, se usa este metodo para renderizarlo en el DOM. Recibe como primer parametro el nombre del componente que se va a renderizar, y se colocan
las variables que va a usar. El segundo parametro, es en cual elemento del html se va a renderizar el
componente
```js
React.render(<HelloWorldComponent name="Zoilo"/>, document.getElementById('container'))
```

## Componentes anidados
Para usar un componente dentro de otro, solo hay que incluir el nombre del componente en el `return` del componente padre
```js
class PokeAvatar extends React.Component{
  render(){
    var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`
    return <img src={url} className="avatar"/>
  }
}

class PokeRow extends React.Component{
  render() {
    return <div className="pokerow">
    <PokeAvatar number={this.props.number}/>
    {this.props.name}
    </div>
  }
}
```

## Keys
Cuando un elemento se repite varias veces, las `Keys` ayudan a React a identificar cual elemento se ha modificado, añadido o eliminado. Las `Keys` deben ser unicas entre los elementos hermanos, no necesariamente deben ser unicas globalmente. Deben ser añadidas desde el componente padre que renderiza el elemento repetitivo.
```js
class PokeRow extends React.Component{
  render() {
    //aqui no se añaden las keys
    return <li className="pokerow">
    <PokeAvatar number={this.props.number}/>
    {this.props.name}
    </li>
  }
}

class PokeTable extends React.Component{
  render(){
    return <ul className="poketable">
    {
      this.props.pokemons.map((pokemon)=>{
        //aqui se añaden las keys
          return <PokeRow key={pokemon.number} name={pokemon.name} number={pokemon.number}/>
      })
    }
    </ul>
  }
}
```