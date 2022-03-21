import { useEffect, useState } from 'react'
import { useSpring, animated, to } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from '@emotion/styled'
import theme from '../../theme'
import { color } from '@emotion/react'

interface Props {
  components: JSX.Element[]
  colors: string[]
}

interface PageProps {
  children: JSX.Element
  index: number
  setActive: React.Dispatch<React.SetStateAction<number>>
  gone?: boolean
  theme: string
}

interface ButtonProps {
  color: string
}

const PageDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  text-align: center;
  font-size: 37px;
  font-weight: bold;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`

const StyledSVG = styled.svg`
  position: absolute;
  height: 100%;
  width: 10px; //it makes the liquid swipe occuping less size, consequently making the UI under more accessable to interact.
`

const StyledButton = styled(animated.button)<ButtonProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-family: 'Oswald', sans-serif;
  background: transparent;
  color: ${(props) => theme.color[props.color as keyof color]};
  border: 1px solid ${(props) => theme.color[props.color as keyof color]};
  &::focus {
    outline: 0;
  }
`

const height = window.innerHeight
const width = window.innerWidth
let w: number = width
if (width <= 500) {
  w = width
}

const getPath = (y: number, x: number, width: number) => {
  const anchorDistance = 200 + x * 0.5
  const curviness = anchorDistance - 60
  return `M0, 
        ${height} 
        H0V0h${width}v 
        ${y - anchorDistance} 
        c0, 
        ${curviness} 
        , 
       ${x} 
        , 
        ${curviness} 
        , 
       ${x} 
        , 
        ${anchorDistance} 
        S${width}, 
        ${y} 
        ,${width}, 
        ${y + anchorDistance * 2}
        V
        ${height}
        z`
}

// น่าจะเป็นlogic ทำ swipe ทีละ 1component
const Page = ({
  children,
  index,
  setActive,
  gone = false,
  theme,
}: PageProps) => {
  const [isGone, setGone] = useState(gone)
  const [isMove, setMove] = useState(false)

  const [{ posX, posY }, setPos] = useSpring(() => ({
    posX: -50,
    posY: height * 0.72 - 20,
    config: {
      mass: 3,
    },
  }))

  const [{ d }, setDvalue] = useSpring(() => ({
    d: gone ? getPath(0, 0, w) : getPath(height * 0.72, 0, 0),
    config: {
      mass: 3,
    },
    onRest: () => {
      if (isGone) {
        setDvalue({ d: getPath(0, 0, w) })
      }
    },
  }))

  useEffect(() => {
    if (!gone) {
      setDvalue({
        d: getPath(height * 0.72, 48, 5),
      })
      setTimeout(() => {
        setPos({
          posX: 7,
        })
      }, 100)
    }
  }, [gone])

  const bind = useDrag(({ down, movement: [mx], xy: [, my], vxvy: [vx] }) => {
    if (!isGone) {
      if (down && isMove) {
        setDvalue({
          d: getPath(my, mx + 60, 10),
        })
        setPos({
          posX: mx + 20,
          posY: my - 20,
        })
        if (mx > width / 2 || vx > 3) {
          setDvalue({
            d: getPath(my, -50, w),
          })
          setGone(true)
          setTimeout(() => {
            setDvalue({
              d: getPath(my, 0, w),
            })
            setActive(index)
          }, 240)
        }
      } else {
        setDvalue({
          d: getPath(height * 0.72, 48, 5),
        })
        setPos({
          posX: 7,
          posY: height * 0.72 - 20,
        })
      }
    }
  })

  return (
    <div id={`pageContainer${index}`} {...bind()}>
      <StyledSVG version="1.1" id="blob" xmlns="http://www.w3.org/2000/svg">
        <clipPath id={`clipping${index}`}>
          <animated.path id={`blob-path${index}`} d={d} />
        </clipPath>
      </StyledSVG>
      {/*ทำcliping path */}
      <PageDiv
        style={{
          clipPath: `url(#clipping${index})`,
          WebkitClipPath: `url(#clipping${index})`,
        }}
      >
        {children}
      </PageDiv>
      {/*ทำcliping path */}
      <StyledButton
        id={`button${index}`}
        color={theme}
        onMouseDown={() => {
          setMove(true)
        }}
        onMouseUp={() => {
          setMove(false)
        }}
        onTouchStart={() => {
          setMove(true)
        }}
        onTouchEnd={() => {
          setMove(false)
        }}
        style={{
          opacity: posX.to({
            range: [0, 100],
            output: [1, 0],
          }),
          transform: to(
            [
              posX.to((x) => `translateX(${x}px)`),
              posY.to((y) => `translateY(${y}px)`),
            ],
            (translateX, translateY) => `${translateX} ${translateY}`,
          ),
        }}
      >
        {'>'}
      </StyledButton>
    </div>
  )
}
const LiquidSwipe = ({ components, colors }: Props): JSX.Element => {
  const sizeOfSwipe = components.length

  //   for (let i = 0; i < sizeOfSwipe - 1; i++) {
  //     const keyMap = Object.assign({}, { i: i + 1 })
  //     console.log(keyMap)
  //   }
  const keyMap: {
    [key: string]: number
  } = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 0 } //ยังหาวิธีวนสร้างไม่ได้
  const [isActive, setActive] = useState(0) // น่าจะเป็น current index
  const [elm, setElm] = useState([
    <Page
      key={0}
      index={0}
      setActive={setActive}
      gone={true}
      theme={colors[sizeOfSwipe - 1]}
    >
      {components[0]}
    </Page>,
  ])

  useEffect(() => {
    const key = keyMap[isActive]
    if (elm.length === sizeOfSwipe - 1) {
      let skey = key - 1
      if (key === 0) skey = sizeOfSwipe - 1
      setTimeout(() => {
        setElm([
          ...elm.slice(1, sizeOfSwipe),
          <Page
            key={key}
            index={key}
            setActive={setActive}
            theme={colors[skey]}
          >
            {components[key]}
          </Page>,
        ])
      }, 600)
    } else {
      setElm([
        ...elm,
        <Page
          key={key}
          index={key}
          setActive={setActive}
          theme={colors[key - 1]}
        >
          {components[key]}
        </Page>,
      ])
    }
  }, [isActive])

  return <div>{elm}</div>
}

export default LiquidSwipe
