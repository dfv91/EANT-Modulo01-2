import React, {Component} from 'react'

class Form extends Component {

  render(){
    return (
      <form>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input type="text" name="precio" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input type="text" name="stock" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <input type="text" name="marca" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <input type="text" name="categoria" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen</label>
          <input type="text" name="imagen" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="presentacion">Presentacio</label>
          <textarea type="presentacion" rows="5" className="form-control"/>
        </div>

        <button type="button" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default Form
