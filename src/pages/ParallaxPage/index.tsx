// import PageLayout from '../../layouts/PageLayout'
import './style.css'
import Stars from '../../images/stars.png'
import Moon from '../../images/moon.png'
import MountainsFront from '../../images/mountains_front.png'
import MountainsBehind from '../../images/mountains_behind.png'
import { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ParallaxPage = (): JSX.Element => {
  const moonRef = useRef<HTMLImageElement | null>(null)
  const starsRef = useRef<HTMLImageElement | null>(null)
  const mountainsFrontRef = useRef<HTMLImageElement | null>(null)
  const mountainsBehindRef = useRef<HTMLImageElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const btnRef = useRef<HTMLAnchorElement | null>(null)
  const headerRef = useRef<HTMLHeadElement | null>(null)

  const onScroll = useCallback(() => {
    const value = window.scrollY
    if (starsRef.current) {
      const stars = starsRef.current
      stars.style.left = value * 0.25 + 'px'
    }
    if (moonRef.current) {
      const moon = moonRef.current
      moon.style.top = value * 1.05 + 'px'
    }
    if (mountainsBehindRef.current) {
      const mountainsBehind = mountainsBehindRef.current
      mountainsBehind.style.top = value * 0.5 + 'px'
    }
    if (mountainsFrontRef.current) {
      const mountainsFront = mountainsFrontRef.current
      mountainsFront.style.top = value * 0 + 'px'
    }
    if (textRef.current) {
      const text = textRef.current
      text.style.marginRight = value * 4 + 'px'
      text.style.marginTop = value * 1.5 + 'px'
    }
    if (btnRef.current) {
      const btn = btnRef.current
      btn.style.marginTop = value * 1.5 + 'px'
    }
    if (headerRef.current) {
      const header = headerRef.current
      header.style.top = value * 0.5 + 'px'
    }
  }, [])

  useEffect(() => {
    console.log('-')
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="body">
      <header ref={headerRef} className="header">
        <Link className="logo" to={'/'}>
          Logo
        </Link>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contract</a>
          </li>
        </ul>
      </header>
      <section className="section">
        <img src={Moon} id="moon" ref={moonRef} />
        <img src={Stars} id="stars" ref={starsRef} />
        <img
          src={MountainsBehind}
          id="mountains_behind"
          ref={mountainsBehindRef}
        />
        <h2 id="text" ref={textRef}>
          Moon Light
        </h2>
        <a href="#sec" id="btn" ref={btnRef}>
          Explore
        </a>
        <img
          src={MountainsFront}
          id="mountains_front"
          ref={mountainsFrontRef}
        />
      </section>
      <div className="sec" id="sec">
        <h2>Parallax Scrolling Effect</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          debitis, inventore soluta labore officiis pariatur atque quaerat enim.
          Nemo quod porro unde perspiciatis architecto at beatae saepe fugiat
          autem sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illo dolores nobis dolor magni tempore! Laborum ipsam provident,
          necessitatibus sint aperiam nulla architecto earum eos cumque, fuga,
          qui obcaecati distinctio laboriosam! <br></br>Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nobis error amet libero itaque
          perferendis repudiandae enim, neque facere. Eos accusantium delectus
          id vel rem iure adipisci ut dicta reiciendis! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ipsam voluptatum accusantium eos?
          Provident suscipit accusantium dolores sunt ab, molestiae unde
          reprehenderit labore fuga iusto, est dicta asperiores saepe temporibus
          voluptatibus!<br></br> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus fugiat excepturi consectetur obcaecati
          saepe, inventore cupiditate repellendus ut consequatur asperiores
          expedita rerum perspiciatis necessitatibus non maxime quidem
          doloremque molestiae impedit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus fugiat excepturi consectetur obcaecati
          saepe, inventore cupiditate repellendus ut consequatur asperiores
          expedita rerum perspiciatis necessitatibus non maxime quidem
          doloremque molestiae impedit!
          <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus fugiat excepturi consectetur obcaecati saepe, inventore
          cupiditate repellendus ut consequatur asperiores expedita rerum
          perspiciatis necessitatibus non maxime quidem doloremque molestiae
          impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus fugiat excepturi consectetur obcaecati saepe, inventore
          cupiditate repellendus ut consequatur asperiores expedita rerum
          perspiciatis necessitatibus non maxime quidem doloremque molestiae
          impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus fugiat excepturi consectetur obcaecati saepe, inventore
          cupiditate repellendus ut consequatur asperiores expedita rerum
          perspiciatis necessitatibus non maxime quidem doloremque molestiae
          impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus fugiat excepturi consectetur obcaecati saepe, inventore
          cupiditate repellendus ut consequatur asperiores expedita rerum
          perspiciatis necessitatibus non maxime quidem doloremque molestiae
          impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus fugiat excepturi consectetur obcaecati saepe, inventore
          cupiditate repellendus ut consequatur asperiores expedita rerum
          perspiciatis necessitatibus non maxime quidem doloremque molestiae
          impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus fugiat excepturi consectetur obcaecati saepe, inventore
          cupiditate repellendus ut consequatur asperiores expedita rerum
          perspiciatis necessitatibus non maxime quidem doloremque molestiae
          impedit!
        </p>
      </div>
    </div>
  )
}

export default ParallaxPage
