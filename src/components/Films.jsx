import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export const Films = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get("https://swapi.dev/api/films/")
      setFilms(response.data.results)
    }
    getFilms()
  }, [])

  return (
    <div className="films">
      <h2>List of Films</h2>
      {films.map((film) => {
        const filmId = new URL(film.url).pathname.split("/").at(-2)
        return (
          <div key={film.url} className="card">
            <h3>{film.title}</h3>
            <Link to={`/films/${filmId}`}>View Details</Link>
          </div>
        )
      })}
    </div>
  )
}
