import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get("https://swapi.dev/api/people/")
      setCharacters(response.data.results)
    }
    getCharacters()
  }, [])

  return (
    <div className="characters">
      <h2>List of Characters</h2>
      {characters.map((character) => {
        const characterId = new URL(character.url).pathname.split("/").at(-2)
        return (
          <div key={character.url} className="card">
            <h3>{character.name}</h3>
            <Link to={`/characters/${characterId}`}>View Details</Link>
          </div>
        )
      })}
    </div>
  )
}
