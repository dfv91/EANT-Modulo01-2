import React, {Component} from 'react'
import slugify from '../helpers/String.js'


class Product extends Component {

  constructor(){
    super()
    this.state = {
      visto : false,
      loaded : false
    }
  }

  componentDidMount(){
    this.setState({
      ...this.props.item,
      loaded : true
    })
  }

  verProducto(event){
    event.preventDefault()
    this.setState({ visto : true })

  }

  editarProducto(){
    this.setState(
      {
      Precio : parseFloat(prompt("Ingrese un nuevo precio")),
      Stock : parseInt(prompt("Ingrese nuevo Stock"))
    },
      () => {
        this.props.onActualizarProducto( this.state )
      }
    )

  }

  borrarProducto(){
    this.props.onActualizarProducto(this.state, true)
  }

  render(){

    if( !this.state.loaded ){
      return <div className= "col-6 col-md-4 my-2" >Creando Producto...</div>
    } else {

          const url = `/MR-${this.state.idProducto}-${slugify(this.state.Nombre)}`

          const estilo = this.state.visto ? "card bg-dark" : "card bg-light"

          return(
            <article className= "col-6 col-md-4 my-2">

            <div className={estilo}>
              <img src={this.state.Imagen} className="card-img-top w-100" alt={this.state.Nombre}/>
              <div className="card-body">
                <h5 className="card-title">{this.state.Marca} - {this.state.Nombre}</h5>
                <p className="card-text">{this.state.Presentacion}</p>
                <p><span className="badge badge-primary">{this.state.Precio}</span></p>
                <a href={url} onClick={this.verProducto.bind(this)} className="btn btn-primary">Ver +</a>
                <button className="btn btn-success" onClick={this.editarProducto.bind(this)} >Editar</button>
                <button className="btn btn-danger" onClick={this.borrarProducto.bind(this)} >Borrar</button>
              </div>
            </div>
            </article>
          )
    }

  }
}
export default Product
