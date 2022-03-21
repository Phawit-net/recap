import styled from '@emotion/styled'
import Typography from '../Typography'

interface Props {
  data?: any
}

const Container = styled.header`
  display: flex;
  margin-top: 20px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const TextLayout = styled.div`
  width: 80%;
`

const ImageLayout = styled.div`
  text-align: center;
`

const Showcase = ({ data }: Props): JSX.Element => {
  const { color, title, subtitle, caption, image } = data

  return (
    <Container>
      <Grid>
        <TextLayout>
          <Typography
            fontFamily="Source Sans Pro"
            fontSize={80}
            bold
            color={color}
          >
            {title}
          </Typography>
          <Typography
            fontFamily="Source Sans Pro"
            fontSize={40}
            bold
            color={color}
          >
            {subtitle}
          </Typography>
          <Typography fontFamily="Source Sans Pro" fontSize={28} color={color}>
            {caption}
          </Typography>
        </TextLayout>
        <ImageLayout>
          <img src={image} style={{ width: '70%' }} />
        </ImageLayout>
      </Grid>
    </Container>
  )
}

export default Showcase
