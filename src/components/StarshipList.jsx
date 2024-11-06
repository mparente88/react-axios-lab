import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export function StarshipList() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  return (
    <div className="starship">
      <h2>List of Starships</h2>
      {starships.map((starship) => {
        const starshipId = new URL(starship.url).pathname.split("/").at(-2)
        return (
          <div key={starship.url} className="card">
            <h3>{starship.name}</h3>
            <Link to={`/starships/${starshipId}`}>View Details</Link>
          </div>
        )
      })}
    </div>
  )
}
