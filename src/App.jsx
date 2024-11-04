// import "./styles/App.css"
import { useState, useEffect } from "react"
import { BASE_URL } from "./globals"
import axios from "axios"
import { StarshipList } from "./components/StarshipList.jsx"

const App = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/api/starships/?format=json`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  return (
    <div>
      <StarshipList starships={starships} />
    </div>
  )
}

export default App
