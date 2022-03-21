import Typography from '../../components/Typography'
import pan from '../../images/pan.png'
import vetget from '../../images/vetget.png'
import galic from '../../images/galic.png'
import knife from '../../images/knife.png'
import about from '../../images/about.png'
import chilli from '../../images/chilli.png'
import './style.css'
import { useCallback, useEffect, useRef } from 'react'
import Button from '../../components/Button'

const ScrollsmoothPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const panRef = useRef<HTMLImageElement | null>(null)
  const knifeRef = useRef<HTMLImageElement | null>(null)
  const vetgetRef = useRef<HTMLImageElement | null>(null)
  const galicRef = useRef<HTMLImageElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const chilliRef = useRef<HTMLImageElement | null>(null)

  const onScroll = useCallback(() => {
    const value = containerRef.current?.scrollTop
    if (value) {
      if (panRef.current) {
        const pan = panRef.current
        if (value > 649) {
          pan.style.top = value * 0 + 'px'
        } else {
          pan.style.top = value * -0.5 + 'px'
        }
      }
      if (knifeRef.current) {
        const knife = knifeRef.current
        if (value > 649) {
          knife.style.top = value * 0 + 'px'
        } else {
          knife.style.top = value * -0.1 + 'px'
        }
      }
      if (vetgetRef.current) {
        const vetget = vetgetRef.current
        if (value > 649) {
          vetget.style.top = value * 0 + 'px'
        } else {
          vetget.style.top = value * -0.3 + 'px'
        }
      }
      if (galicRef.current) {
        const galic = galicRef.current
        if (value > 649) {
          galic.style.top = value * 0 + 'px'
        } else {
          galic.style.top = value * 0.1 + 'px'
        }
      }
      if (textRef.current) {
        const text = textRef.current
        if (value > 1289) {
          text.style.left = value * 0 + 'px'
        } else {
          text.style.left = value * 0.05 + 'px'
        }
      }
      if (chilliRef.current) {
        const chilli = chilliRef.current
        if (value > 1289) {
          chilli.style.bottom = value * 0 + 'px'
        } else {
          chilli.style.bottom = value * 0.15 + 'px'
        }
      }
    }
  }, [])

  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener('scroll', onScroll)
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('scroll', onScroll)
        }
      }
    }
  }, [])

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <div className="container" ref={containerRef}>
        <section className="sectionScroll">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography h1 fontFamily="Merriweather" color="white">
              A Premium
            </Typography>
            <Typography h1 fontFamily="Merriweather" color="white">
              And Authentic
            </Typography>
            <Typography h1 fontFamily="Merriweather" color="white">
              Stakehouse
            </Typography>
            <br />
            <br />
            <Button title="Book A Table" type="secondary" className="scroll" />
          </div>
          <div
            style={{
              position: 'relative',
              width: 800,
              height: 589,
            }}
          >
            <img ref={panRef} src={pan} id="pan" />
            <img ref={vetgetRef} src={vetget} id="vetget" />
            <img ref={galicRef} src={galic} id="galic" />
            <img ref={knifeRef} src={knife} id="knife" />
          </div>
        </section>
        <section className="sectionScroll">
          <img
            ref={chilliRef}
            src={chilli}
            id="chilli"
            style={{
              position: 'absolute',
              width: 200,
              height: 'fit-content',
              right: 100,
            }}
          />
          <div
            style={{
              display: 'flex',
              backgroundColor: 'white',
              width: 1000,
              height: 370,
            }}
          >
            <img src={about} height="100%" alt="about" loading="eager" />
            <div
              style={{
                width: '100%',
                padding: '30px 80px 30px 45px',
              }}
            >
              <div ref={textRef} style={{ position: 'relative' }}>
                <Typography
                  fontSize={36}
                  fontFamily="Parisienne"
                  color="black90"
                >
                  The Stake Restaurant
                </Typography>
                <Typography
                  bold
                  fontSize={36}
                  fontFamily="Merriweather"
                  color="black90"
                >
                  Our Story
                </Typography>
                <Typography body1 fontFamily="Merriweather" color="black90">
                  We only source the very finest single farm reared beef from
                  around the UK.
                </Typography>
                <Typography body1 fontFamily="Merriweather" color="black90">
                  All our steak cuts are from beef that has been aged on the
                  bone for at least 28 days
                </Typography>
                <Typography body1 fontFamily="Merriweather" color="black90">
                  This maturing process enhances the richness in taste and
                  ensures tenderness resulting in a sensational eating
                  experience.
                </Typography>
                <br />
                <Typography body1 fontFamily="Merriweather" color="black90">
                  more info
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionScroll">
          <h1>Page three</h1>
        </section>
      </div>
    </div>
  )
}

export default ScrollsmoothPage
