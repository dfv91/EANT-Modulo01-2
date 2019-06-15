import React, {Component} from 'react'
import slugify from '../helpers/String.js'


class Product extends Component {

  constructor(){
    super()
    this.state = {
      visto : false
    }
  }

  verProducto(event){
    event.preventDefault()
    this.setState({ visto : true })

  }

  render(){

    const url = `MR-${this.props.item.idProducto}-${slugify(this.props.item.Nombre)}`

    const estilo = this.state.visto ? "card bg-dark" : "card bg-light"

    return(
      <article className= "col-6">
      <div className={estilo}>
        <img src={this.props.item.Imagen} className="card-img-top w-100" alt={this.props.item.Nombre}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.item.Marca} - {this.props.item.Nombre}</h5>
          <p className="card-text">{this.props.item.Presentacion}</p>
          <p><span className="badge badge-primary">{this.props.item.Precio}</span></p>
          <a href={url} onClick={this.verProducto.bind(this)} className="btn btn-primary">Ver +</a>
          <button className="btn btn-danger" data-toggle="modal" data-target="#react-modal">Editar</button>
        </div>
      </div>
      </article>
    )
  }
}
export default Product
