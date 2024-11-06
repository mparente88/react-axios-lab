import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import { Home } from "./Home"
import { StarshipList } from "./StarshipList"
import { Films } from "./Films"
import { Planets } from "./Planets"
import { Characters } from "./Characters"
import { StarshipPage } from "./StarshipPage"
import { FilmsPage } from "./FilmsPage"
import { PlanetPage } from "./PlanetPage"
import { CharactersPage } from "./CharactersPage"

export const Main = () => {
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/api/starships/?format=json`)
      setStarships(response.data.results)
    }
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/api/films/?format=json`)
      setFilms(response.data.results)
    }
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/api/people/?format=json`)
      setCharacters(response.data.results)
    }
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/api/planets/?format=json`)
      setPlanets(response.data.results)
    }
    getStarships()
    getFilms()
    getCharacters()
    getPlanets()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/starships"
          element={<StarshipList starships={starships} />}
        />
        <Route path="/films" element={<Films films={films} />} />
        <Route
          path="/characters"
          element={<Characters characters={characters} />}
        />
        <Route path="/planets" element={<Planets planets={planets} />} />

        <Route path="/starships/:id" element={<StarshipPage />} />
        <Route path="/films/:id" element={<FilmsPage />} />
        <Route path="/planets/:id" element={<PlanetPage />} />
        <Route path="/characters/:id" element={<CharactersPage />} />
      </Routes>
    </>
  )
}
