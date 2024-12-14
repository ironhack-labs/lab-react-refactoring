import CharacterCard from '../components/CharacterCard'
import classes from '../styles/HomePage.module.css'
import Pagination from '../components/Pagination'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [characters, setCharacters] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const getCharacters = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      if (response.ok) {
        const data = await response.json()
        setCharacters(data.results)
        setNumberOfPages(data.info.pages)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  useEffect(() => {
    getCharacters()
  }, [currentPage])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevCurrentPage => prevCurrentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
    }
  }

  return (
    <>
      <ul className={classes.listCtn}>
        {characters.map(character => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </>
  )
}

export default HomePage
