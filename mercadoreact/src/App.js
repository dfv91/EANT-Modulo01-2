import React from 'react';
import Header from './Components/Header'
import Menu from './Components/Menu'
//import './App.css';
//import productos from './productos.json'
import Product from './Components/Product'
import Client from './helpers/Client'
import Modal from './Components/Modal'

const API = new Client()





class App extends React.Component {

  constructor(){
    super()
    this.state = {
      title : "MercadoReact",
      slogan : "Mucho mas que JS",
      //products : ["Música", "Deporte", "Electro", "Pesca", "Calzado Masculino"]
      /*
      products : [
        { nombre: "Guitarra Criolla", precio : 1200, stock: 300, categoria : "Música" },
        { nombre: "Paleta Ping Pong x 2", precio : 350, stock: 650, categoria : "Deportes" },
        { nombre: "Microondas", precio : 8600, stock: 100, categoria : "Electro" },
        { nombre: "Pelota Basket", precio : 960, stock: 225, categoria : "Deportes" },
        { nombre: "Marcadores Color", precio : 85, stock: 400, categoria : "Librería" }
        ]
        */
        products : [],
        loaded : false
    }
  }

  componentWillMount(){
    /*
    fetch("https://api.myjson.com/bins/fb377").then((response) => {
      return response.json()
    }).then((productos) => {
      this.setState({ products : productos, loaded : true })
    })
    */

    API.getData("https://api.myjson.com/bins/fb377").then((productos) => {
      this.setState({ products : productos, loaded : true })
    })
  }

  agregarProducto(){}

  editarProducto(){
    console.log("editare el producto nro 14")
    console.log( this.state.products[13])
  }

  borrarProducto(){}

  buscarProducto(){}

  render(){
    if( !this.state.loaded ){
      return <div>Iniciando App...</div>
    } else {

      const losProductos = this.state.products.map(
        (product, index)=> <Product item={product} key={index} itemID={product.idProducto} onEditarProducto={this.editarProducto} />
      )

      return (
      <div className="App">
        <Header title={this.state.title} slogan={this.state.slogan}/>

        <button onClick={this.editarProducto.bind(this)}>EDITAR</button>

        <Menu links={this.state.products} />
        <section className="row">{losProductos}</section>
        <Modal />
      </div>
    );}


}

}

export default App;