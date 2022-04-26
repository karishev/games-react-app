import { useState } from 'react'
import { GameList } from '../Components/Games/GameList'
import { BiSearch } from 'react-icons/bi'
import styles from '../Components/UI/Home.module.css'

export const Home = () => {
  const currentYear = new Date().getFullYear()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <GameList />
    </div>
  )
}
