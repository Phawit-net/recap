import { useCallback, useEffect, useRef } from 'react'
import Button from '../../components/Button'
import PageLayout from '../../layouts/PageLayout'
// import Three from '../../components/Three'
import Sketch from '../../components/Three/module.js'

const WebglPage = (): JSX.Element => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  let speed = 0
  let position = 0
  let rounded = 0
  let elems: any[]

  if (containerRef.current) {
    new Sketch({
      dom: containerRef,
    })
  }

  const objs = Array(5).fill({ dist: 0 })
  const raf = () => {
    position += speed
    speed *= 0.8
    objs.forEach((o, i) => {
      o.dist = Math.min(Math.abs(position - i), 1)
      o.dist = 1 - o.dist ** 2
      if (elems?.length > 0) {
        elems[i].style.transform = `scale(${1 + 0.4 * o.dist})`
      }
    })
    rounded = Math.round(position)
    const diff = rounded - position
    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015
    if (divRef.current) {
      const block = divRef.current
      //   block.style.transform = `translate(0,${position * 100}px)`
    }
    if (wrapRef.current) {
      const wrap = wrapRef.current
      wrap.style.transform = `translate(0,${-position * 100 + 50}px)`
    }
    window.requestAnimationFrame(raf)
  }

  const onWheel = useCallback((event) => {
    speed += event.deltaY * 0.0003
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', onWheel)
    raf()
  }, [])

  useEffect(() => {
    elems = [...document.querySelectorAll('.n')]
  }, [])

  return (
    <>
      <div id="wrap" ref={wrapRef}>
        <div
          className="n"
          style={{
            position: 'absolute',
            top: 100,
            height: 10,
            width: 200,
            background: 'black',
          }}
        ></div>
        <div
          className="n"
          style={{
            position: 'absolute',
            top: 200,
            height: 10,
            width: 200,
            background: 'black',
          }}
        ></div>
        <div
          className="n"
          style={{
            position: 'absolute',
            top: 300,
            height: 10,
            width: 200,
            background: 'black',
          }}
        ></div>
        <div
          className="n"
          style={{
            position: 'absolute',
            top: 400,
            height: 10,
            width: 200,
            background: 'black',
          }}
        ></div>

        <div
          className="n"
          style={{
            position: 'absolute',
            top: 500,
            height: 10,
            width: 200,
            background: 'black',
          }}
        ></div>
      </div>
      <div
        id="block"
        ref={divRef}
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          backgroundColor: 'red',
        }}
      ></div>
      <div
        id="container"
        ref={containerRef}
        style={{
          height: '10vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      ></div>
    </>
  )
}

export default WebglPage
