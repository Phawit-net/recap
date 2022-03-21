import { color } from '@emotion/react'
import styled from '@emotion/styled'
import { FaApple } from '@react-icons/all-files/fa/FaApple'
import { Link } from 'react-router-dom'
import theme from '../../theme'
import Typography from '../Typography'

interface Props {
  data?: any
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ButtonContainer = styled.div<Props>`
  display: flex;
  background-color: ${({ color }) => theme.color[color as keyof color]};
  padding: 10px 25px;
  border-radius: 25px;
`
const Header = ({ data }: Props): JSX.Element => {
  const { color, bg, buttonLink } = data
  return (
    <Container>
      <Link to={'/'} style={{ display: 'flex;', textDecoration: 'none' }}>
        <LogoContainer>
          <FaApple
            style={{
              fontSize: 40,
              color: theme.color[color as keyof color],
              marginRight: 5,
            }}
          />
          <Typography
            fontFamily="Source Sans Pro"
            fontSize={40}
            semiBold
            color={color}
          >
            Apple
          </Typography>
        </LogoContainer>
      </Link>
      <ButtonContainer color={color}>
        <a
          href={buttonLink}
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noreferrer"
        >
          <Typography
            semiBold
            color={bg}
            fontSize={18}
          >{`What's News`}</Typography>
        </a>
      </ButtonContainer>
    </Container>
  )
}

export default Header
