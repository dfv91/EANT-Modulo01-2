import React from 'react';
import Header from './Components/Header'
import Menu from './Components/Menu'
//import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      title : "MercadoReact",
      slogan : "Mucho mas que JS",
      //products : ["Música", "Deporte", "Electro", "Pesca", "Calzado Masculino"]
      products : [
        { nombre: "Guitarra Criolla", precio : 1200, stock: 300, categoria : "Música" },
        { nombre: "Paleta Ping Pong x 2", precio : 350, stock: 650, categoria : "Deportes" },
        { nombre: "Microondas", precio : 8600, stock: 100, categoria : "Electro" },
        { nombre: "Pelota Basket", precio : 960, stock: 225, categoria : "Deportes" }
      ]
    }
  }

  render(){
    return (
    <div className="App">
      <Header title={this.state.title} slogan={this.state.slogan}/>
      <Menu links={this.state.products} />
    </div>
  );
}

}

export default App;
