class Pelicula {

		//1) Constructor
		constructor(i, t, d, e, p, v){
			this.ID = i
			this.Titulo = t
			this.Descripcion = d
			this.Estreno = e
			this.Poster = (p != null) ? p : "http://www.seagarden.cl/home/images/contenido-no-disponible.jpg"
			this.Trailer = v
		}

		//2) Metodo de instancia
		Mostrar(){
			document.write(`
				<img src="${this.Poster}" width="150">
				<h1>${this.Titulo} (${this.Estreno})</h1>
				<p>${this.Descripcion}</p>
				<a href="${this.Trailer}" target="_blank">Reproducir Trailer</a>
				<hr>
			`)
		}

		Imprimir(area){

			let ficha = document.querySelector(".pelicula").cloneNode(true)
			ficha.querySelector("h4").innerText = this.Titulo
			ficha.querySelector("p").innerText = this.Estreno
			ficha.querySelector("img").src = this.Poster

			ficha.querySelector("a").onclick = () => {
				//window.alert(`usted quiere ver: ${this.Trailer}`)
				document.querySelector("#playMovie iframe").src = `https://youtube.com/embed/${this.Trailer}`
			}

			ficha.classList.remove("hide")

			console.log(ficha)

			document.querySelector(area).appendChild(ficha)

		}

		//3) Metodo de clase o metodo estatico
		static parse(json){
			let data = JSON.parse( json )

			if( data instanceof Array ){

				return data.map( pelicula => new Pelicula(pelicula.idPelicula, pelicula.Titulo, pelicula.Descripcion, pelicula.Estreno, pelicula.Poster, pelicula.Trailer))

			} else if( data instanceof Object ){

				return new Pelicula(data.idPelicula, data.Titulo, data.Descripcion, data.Estreno, data.Poster, data.Trailer)

			} else {
				throw "Error: el formato no puede usarse para crear objeto Pelicula"
			}
		}
	}