import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export const StarshipPage = () => {
  const { id } = useParams()
  const [starship, setStarship] = useState(null)

  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/${id}/`)
      setStarship(response.data)
    }
    getStarship()
  }, [id])

  if (!starship) return <h1>Loading Starship Details...</h1>

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>
        <strong>Model:</strong> {starship.model}
      </p>
      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Cost:</strong> {starship.cost_in_credits} credits
      </p>
      <p>
        <strong>Length:</strong> {starship.length}
      </p>
      <p>
        <strong>Crew:</strong> {starship.crew}
      </p>
      <Link to="/starships">Return to Starship List</Link>
    </div>
  )
}
