import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export const CharactersPage = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    const getCharacter = async () => {
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`)
      setCharacter(response.data)
    }
    getCharacter()
  }, [id])

  if (!character) return <h1>Loading Character Details...</h1>

  return (
    <div>
      <h2>{character.name}</h2>
      <p>
        <strong>Height:</strong> {character.height}
      </p>
      <p>
        <strong>Mass:</strong> {character.mass}
      </p>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      <Link to="/characters">Return to Character List</Link>
    </div>
  )
}
