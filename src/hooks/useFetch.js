import { useState } from 'react'
import axios from 'axios' 

const useFetch = (baseUrl) => {
  
  const [ infoApi, setInfoApi ] = useState()
  
  //GET

  const getApi = (path) => {
    const url = `${baseUrl}${path}`
    axios.get(url)
      .then( resp => setInfoApi(resp.data) )
      .catch( err => console.error(err) )
  }
  //POST
  //DELETE
  //UPDATE
  return [ infoApi, getApi ]
}

export default useFetch