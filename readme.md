## Componentes
Se crean de forma distinta si se usa ES5 o ES6. Los propTypes son validaciones que no son obligatorias. El metodo `render` de cada componente, es el que contiene como tal lo que se va a mostrar en la vista
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
