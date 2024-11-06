import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export const FilmsPage = () => {
  const { id } = useParams()
  const [film, setFilm] = useState(null)

  useEffect(() => {
    const getFilm = async () => {
      const response = await axios.get(`https://swapi.dev/api/films/${id}/`)
      setFilm(response.data)
    }
    getFilm()
  }, [id])

  if (!film) return <h1>Loading Film Details...</h1>

  return (
    <div>
      <h2>{film.title}</h2>
      <p>
        <strong>Director:</strong> {film.director}
      </p>
      <p>
        <strong>Producer:</strong> {film.producer}
      </p>
      <p>
        <strong>Release Date:</strong> {film.release_date}
      </p>
      <Link to="/films">Return to Film List</Link>
    </div>
  )
}
