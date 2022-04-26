import { useEffect, useState } from 'react'
import style from '../UI/GameList.module.css'
import api from '../../services/api'
import { Game } from '../../model/games.model'

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
export const GameList = () => {
  return <div>GameList</div>
}
