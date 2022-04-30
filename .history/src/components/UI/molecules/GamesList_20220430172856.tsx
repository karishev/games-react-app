import { GamesListItem } from '../atoms/GamesListItem'
import { GameListItemSkeleton } from '../atoms/GameListItemSkeleton'
import { useContext, useEffect, useState } from 'react'
import style from '../modules/GamesList.module.css'
import api from '../../../services/api'
import { Game } from '../../../model/games.model'
import { Grid } from '@mui/material'
import { SearchContext } from '../../templates/SearchContext'
import ErrorBoundary from './ErrorBoundary'

const fetchGames = async () => {
  try {
    const games = await api.games.getGames()
    return games
  } catch (error) {
    console.log('Error: ' + error)
  } finally {
    console.log('Finished')
  }
}
export const GamesList = () => {
  const [games, setGames] = useState<Game[]>()
  const [searchResults, setSearchResults] = useState<Game[]>()

  const { input } = useContext(SearchContext)

  const Error = () => {
    if (searchResults !== '') {
      throw new Error('error')
    }
  }

  useEffect(() => {
    fetchGames().then((response) => response && setGames(response))
  }, [])

  useEffect(() => {
    if (input !== '') {
      const searchedGames =
        games &&
        games.filter((game) => {
          return game.title.toLowerCase().includes(input.toLowerCase())
        })
      setSearchResults(searchedGames)
    } else {
      setSearchResults(games)
    }
  }, [input])
  return (
    <>
      <section className={style.grid}>
        <Grid
          container
          rowSpacing={0.5}
          justifyContent="space-evenly"
          columnSpacing={{ xs: 1, sm: 1, md: 3 }}
        >
          {games
            ? input !== '' && searchResults
              ? searchResults.map((game: Game) => {
                  return <GamesListItem key={game.id} game={game} />
                })
              : games.map((game: Game) => {
                  return <GamesListItem key={game.id} game={game} />
                })
            : Array.from(new Array(16)).map((item, index) => {
                return <GameListItemSkeleton key={index} />
              })}
        </Grid>
      </section>
    </>
  )
}
