let hola = class Hola extends React.Component {

  render(){
    //React.createElement (ETIQUETA, ATRIBUTOS, CONTENIDO, PROPIEDADES DEL OBJETO)
    return React.createElement("div", null, "Hola ", this.props.nombre)
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ReactDOM.render(COMPONENTE, AREA)

ReactDOM.render(
  React.createElement(hola, { nombre : "React" }),
  document.querySelector("#app")
)
