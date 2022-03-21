import Typography from '../Typography'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaBehance } from '@react-icons/all-files/fa/FaBehance'
import { FaDribbble } from '@react-icons/all-files/fa/FaDribbble'
import theme from '../../theme'

const Footer = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingRight: 50,
        flexDirection: 'column',
        margin: '10px 0px',
      }}
    >
      <Typography
        fontFamily="Source Sans Pro"
        fontSize={20}
        semiBold
        color="grey"
      >
        See The Full Concept
      </Typography>
      <div style={{ display: 'flex', gap: 15 }}>
        <a>
          <FaGithub
            style={{ opacity: 0.7, fontSize: 35 }}
            color={theme.color.grey}
          />
        </a>
        <a>
          <FaBehance
            style={{ opacity: 0.7, fontSize: 35 }}
            color={theme.color.grey}
          />
        </a>
        <a>
          <FaDribbble
            style={{ opacity: 0.7, fontSize: 35 }}
            color={theme.color.grey}
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
