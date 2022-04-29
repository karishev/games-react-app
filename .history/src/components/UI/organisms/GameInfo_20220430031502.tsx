import { Slider } from '../atoms/Slider'
import { GameDetails } from '../../../model/game.model'
import { GameInfoBasics } from './GameInfoBasics'
import styles from '../modules/GameInfo.module.css'
import { Typography } from '@mui/material'
import { SystemReqs } from '../molecules/SystemReqs'

interface Props {
  game: GameDetails
}

export const GameInfo: React.FC<Props> = ({ game }) => {
  const { theme } = useContext(ThemeContext)
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: '#161515ed',
      color: 'white',
    },
    light: {
      backgroundColor: '#f8f7f7',
      color: 'black',
    },
    common: {},
  }

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
  }
  const checked = game.description.split('. ')
  return (
    <div className={styles.container}>
      <div>
        <Slider
          images={game.screenshots.map((item) => item.image)}
          title={game.title}
        />

        <Typography
          sx={{
            marginTop: '2rem',
            fontWeight: '400',
            maxWidth: '50vw',
            color: '#F5F5F599',
            lineHeight: '25px',
          }}
          variant="body2"
        >
          {game.description.substring(
            0,
            game.description.indexOf(
              checked.length > 8 ? checked[7] : checked[checked.length - 1]
            )
          )}
        </Typography>
        {checked.length > 8 && (
          <Typography
            sx={{
              marginTop: '2rem',
              fontWeight: '400',
              maxWidth: '50vw',
              color: '#F5F5F599',
              lineHeight: '25px',
            }}
            variant="body2"
            style={}
          >
            {game.description.substring(game.description.indexOf(checked[7]))}
          </Typography>
        )}
        <Typography
          sx={{
            marginTop: '2rem',
            fontWeight: '400',
            maxWidth: '50vw',
            color: 'white',
            lineHeight: '25px',
          }}
          variant="body1"
        >
          Specifications
        </Typography>
        <SystemReqs reqs={game.minimum_system_requirements} />
      </div>
      <GameInfoBasics
        game_image={game.thumbnail}
        publisher={game.publisher}
        developer={game.developer}
        release_date={game.release_date}
        platform={game.platform}
      />
    </div>
  )
}
