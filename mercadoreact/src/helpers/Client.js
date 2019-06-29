class Client {
/*
  getData(url){

    return fetch(url).then((data) => {
      return data.json()
    }).then((json) => {
      return json
    })
  }
  */
  async getData(url){
    let data, objects = null

    if ( !window.localStorage.getItem("_products")){
      data = await fetch(url)
      objects = await data.json()
      await window.localStorage.setItem("_products", JSON.stringify(objects))
    } else {

      data = await window.localStorage.getItem("_products")
      objects = await JSON.parse(data)
    }
    return objects
  }

}
export default Client
