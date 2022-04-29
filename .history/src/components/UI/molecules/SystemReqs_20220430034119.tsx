import { SystemReq } from '../../../model/game.model'
import { ReqsItem } from '../atoms/ReqsItem'
import { ThemeContext } from '../../templates/Main'
import { MainTheme } from '../../templates/MainTheme'
import { useContext } from 'react'
interface Props {
  reqs: SystemReq
}

export const SystemReqs: React.FC<Props> = ({ reqs }) => {
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
    <div
      style={{
        marginTop: '1rem',
        background: '#262626',
        padding: '0.5rem 1rem 0 1rem',
        borderRadius: 3,
        ...themeStyle,
      }}
    >
      {Object.entries(reqs).map(([key, value]) => (
        <ReqsItem key={key} first={key} second={value} />
      ))}
    </div>
  )
}
