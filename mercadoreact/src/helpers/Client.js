class Client {

  getData(url){

    return fetch(url).then((data) => {
      return data.json()
    }).then((json) => {
      return json
    })
  }

}
export default Client
