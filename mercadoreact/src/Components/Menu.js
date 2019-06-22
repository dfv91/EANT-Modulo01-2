import React, {Component} from 'react'
import slugify from '../helpers/String.js'

class Menu extends Component {
  render(){

    return(
      <nav className="container-fluid">
        <ul className="nav nav-pills nav-fill"><Items links={this.props.links} /></ul>
      </nav>
    )
  }
}

class Items extends Component{

  constructor(){
    super()
    this.state = {
      categories : [],
      loaded : false
    }
  }

    componentDidMount(){

      this.setState({
        categories : [ ...new Set ( this.props.links.map(link => link.Categoria ) ) ],
        loaded : true
      })
    }

  render(){

    if( !this.state.loaded ){
      return <li>Cargando...</li>

    } else {

      return this.state.categories.map(
        (link, index) =>
        <li className= "nav-item" key={index}>
          <a className="nav-link btn-info m-1" href={slugify(link)}>{link}</a>
        </li>
        )
    }


  }
}

export default Menu;
