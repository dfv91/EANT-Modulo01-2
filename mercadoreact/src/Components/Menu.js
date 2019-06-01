import React, {Component} from 'react'

class Menu extends Component {
  render(){

    return(
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
        <ul className="navbar-nav mx-auto"><Items links={this.props.links} /></ul>
      </nav>
    )
  }
}

class Items extends Component{

  constructor(){
    super()
    this.state = {
      categories : null
    }
  }

    componentDidMount(){
      this.setState({
        categories : new Set (this.props.links.map(link => link.categoria))
      })
    }

  slugify(string) {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
  const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
  render(){
  return this.props.links.map(
    (link, index) =>
    <li className= "nav-item"key={index}>
      <a className="nav-link" href={this.slugify(link.categoria)}>{link.categoria}</a>
    </li>
    )
  }
}

export default Menu;
