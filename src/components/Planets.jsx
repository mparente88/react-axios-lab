import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get("https://swapi.dev/api/planets/")
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])

  return (
    <div className="planets">
      <h2>List of Planets</h2>
      {planets.map((planet) => {
        const planetId = new URL(planet.url).pathname.split("/").at(-2)
        return (
          <div key={planet.url} className="card">
            <h3>{planet.name}</h3>
            <Link to={`/planets/${planetId}`}>View Details</Link>
          </div>
        )
      })}
    </div>
  )
}
