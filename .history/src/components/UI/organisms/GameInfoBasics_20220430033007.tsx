import { Button, Card, CardContent, CardMedia } from '@mui/material'
import { InfoItem } from '../atoms/InfoItem'
import { ThemeContext } from '../../templates/Main'
import { MainTheme } from '../../templates/MainTheme'
import { useContext } from 'react'

interface Props {
  game_image: string
  publisher: string
  developer: string
  release_date: string
  platform: string
}

export const GameInfoBasics: React.FC<Props> = (game) => {
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
  return (
    <Card
      sx={{
        marginLeft: '2rem',
        maxWidth: '20rem',
        marginTop: '5rem',
        backgroundColor: 'rgba(0,0,0,0)',
        boxShadow: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CardMedia
        sx={{
          aspectRatio: '16/9',
          maxWidth: '100%',
          borderRadius: 1,
        }}
        component="img"
        alt={game.developer}
        image={game.game_image}
        style={themeStyle}
      />

      <CardContent sx={{ padding: '0 8px', width: '100%' }}>
        {Object.entries(game).map(
          ([key, value]) =>
            value !== game.game_image && (
              <InfoItem key={key} first={key} second={value} />
            )
        )}
      </CardContent>
      <Button
        variant="outlined"
        sx={{
          color: 'white',
          fontWeight: '400',
          marginTop: '1rem',
          maxWidth: '90%',
          borderColor: 'black',
        }}
        fullWidth
        style={themeStyle}
      >
        Add to Favorites
      </Button>
    </Card>
  )
}
