import React from 'react'
import { Game } from '../../model/games.model'
import styles from './GameItem.module.css'

interface PageProps {
  game: Game
}

export const GameItem: React.FC<PageProps> = ({ game }) => {
  return <div>GameItem</div>
}
