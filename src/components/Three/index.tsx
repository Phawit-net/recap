import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@three-ts/orbit-controls'
import fragment from '../../shader/fragment.glsl'
import vertex from '../../shader/vertex.glsl'

const ThreeScene = (): JSX.Element => {
  const canvas = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (canvas.current) {
      const scene = new THREE.Scene()
      const width = canvas.current.clientWidth
      const height = canvas.current.clientHeight
      let time = 0
      let isPlaying = true
      const materials: any[] = []
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.physicallyCorrectLights = true
      renderer.outputEncoding = THREE.sRGBEncoding

      canvas.current.appendChild(renderer.domElement)

      const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.001,
        1000,
      )
      camera.position.set(0, 0, 2)
      const controls = new OrbitControls(camera, renderer.domElement)
      const material = new THREE.ShaderMaterial({
        extensions: {
          derivatives: true,
        },
        side: THREE.DoubleSide,
        uniforms: {
          time: { value: 0 },
          distanceFromCenter: { value: 0 },
          texture1: { value: null },
          resolution: { value: new THREE.Vector4() },
          uvRate1: { value: new THREE.Vector2(1, 1) },
        },
        transparent: true,
        vertexShader: vertex,
        fragmentShader: fragment,
      })
      const resize = () => {
        renderer.setSize(width, height)
        camera.aspect = width / height
        const imageAspect = 853 / 1280
        let a1
        let a2
        if (height / width > imageAspect) {
          a1 = (width / height) * imageAspect
          a2 = 1
        } else {
          a1 = 1
          a2 = height / width / imageAspect
        }
        material.uniforms.resolution.value.x = width
        material.uniforms.resolution.value.y = height
        material.uniforms.resolution.value.z = a1
        material.uniforms.resolution.value.w = a2
        camera.updateProjectionMatrix()
      }
      resize()

      const stop = () => {
        isPlaying = false
      }

      const play = () => {
        if (!isPlaying) {
          render()
          isPlaying = true
        }
      }

      const render = () => {
        if (!isPlaying) return
        time += 0.05
        if (materials) {
          materials.forEach((m) => {
            m.uniforms.time.value = time
          })
        }
        requestAnimationFrame(render)
        renderer.render(scene, camera)
      }
    }
  }, [])

  return (
    <div
      style={{ width: '100%', height: '100%', position: 'absolute' }}
      ref={canvas}
    />
  )
}

export default ThreeScene
