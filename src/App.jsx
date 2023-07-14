import './App.css'
import useFetch from './hooks/useFetch'
import { useEffect } from 'react'

export default function App() {

  const baseUrl = "http://movies-crud-2.academlo.tech"

  const [ movies, getAllMovies ] = useFetch(baseUrl)

  useEffect(() => {
    getAllMovies("/movies/")
  }, [])  
  console.log(movies)
  return (
    <main>
    
    </main>
  )
}
