import styled from '@emotion/styled'
import { color } from '@emotion/react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Showcase from '../../components/Showcase'
import theme from '../../theme'

interface Props {
  allData?: any
}

interface LayoutProps {
  color?: string
}

const Layout = styled.div<LayoutProps>`
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => theme.color[color as keyof color]};
`

const Device = ({ allData }: Props): JSX.Element => {
  return (
    <Layout color={allData.bg}>
      <Header data={allData} />
      <Showcase data={allData} />
      <Footer />
    </Layout>
  )
}

export default Device
