import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export const PlanetPage = () => {
  const { id } = useParams()
  const [planet, setPlanet] = useState(null)

  useEffect(() => {
    const getPlanet = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}/`)
      setPlanet(response.data)
    }
    getPlanet()
  }, [id])

  if (!planet) return <h1>Loading Planet Details...</h1>

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>
        <strong>Climate:</strong> {planet.climate}
      </p>
      <p>
        <strong>Terrain:</strong> {planet.terrain}
      </p>
      <p>
        <strong>Population:</strong> {planet.population}
      </p>
      <Link to="/planets">Return to Planet List</Link>
    </div>
  )
}
