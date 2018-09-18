## React.render()

Recibe como primer parametro el nombre del componente que se va a renderizar, y se colocan
las variables que va a usar. El segundo parametro, es en cual elemento del html se va a renderizar el
componente
```js
React.render(<HelloWorldComponent name="Zoilo"/>, document.getElementById('container'))
```