## Ejecutar
1. `npm install`
2. `npm run build`
3. Abrir `index.html`

## React Router notas
Asi se instancian las rutas del react router, el `path` es la ruta en la url, y el `handler` es el nombre del Component que se va a cargar en esa ruta
```js
let routes = <Route handler={App}>
<Route path="about" handler={About}>
<Route path="user" handler={User}>
</Route>
```

Cuando se inicia el Router, se le pasa como primer parametro las rutas creadas (`routes`), como segundo parametro el simbolo que va al principio de las rutas. Aqui se usa `HashLocation`, porque el path de las rutas empieza con `#`. El tercer parametro es el render como tal de la aplicacion, donde se le dice a React donde se va a montar el componente principal.
```js
class App extends React.Component{
  render(){
    return <div>
    <h1>App</h1>
    <a href="#user">User</a>
    <a href="#about">About</a>
    <RouteHandler/>
    </div>
  }
}
/* mas codigo */
Router.run(routes, Router.HashLocation, (Root)=>{
  React.render(<Root/>, document.getElementById('container'))
})
```