import { Typography } from '@mui/material'
import { ThemeContext } from '../../templates/Main'
import { MainTheme } from '../../templates/MainTheme'
import { useContext } from 'react'
interface Props {
  first: string
  second: string
}

export const InfoItem: React.FC<Props> = (info) => {
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
  const firstChanger = () => {
    if (info.first == 'release_date') return 'Release Date'
    else return info.first[0].toUpperCase() + info.first.substring(1)
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
          color: 'white',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography
          sx={{ color: '#F5F5F599' }}
          variant="body2"
          style={themeStyle}
        >
          {firstChanger()}
        </Typography>
        <Typography variant="body2" style={themeStyle}>
          {info.second}
        </Typography>
      </div>
    </>
  )
}
