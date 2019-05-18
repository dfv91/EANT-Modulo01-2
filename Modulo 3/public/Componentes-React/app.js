let hola = class Hola extends React.Component {

  render(){
    //React.createElement(ETIQUETA, ATRIBUTOS, CONTENIDO, PROPIEDADES DEL OBJETO)
    return React.createElement("div", { style : {color : 'red', fontfamily : 'arial' }}, "Hola ", this.props.nombre)
  }

}
let Imagen = class Imagen extends React.Component{
  render(){

    return React.createElement("img", { src : this.props.url}, null)

  }
}
///////////////////////////////////////
//ReactDOM.render(COMPONENTE, AREA)

ReactDOM.render(
  //React.createElement(hola, { nombre : "Luna" }),
  React.createElement(Imagen, { url : "https://lorempixel.com/100/100/animals"}),
  document.querySelector("#app")
)
