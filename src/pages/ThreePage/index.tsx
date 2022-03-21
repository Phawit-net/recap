import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'

const ThreePage = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null)

  //สิ่งที่สำคัญในscene 1.MESH 2.CAMERA 3.LIGHT
  useEffect(() => {
    let width
    let height
    let aspectRatio
    if (canvasRef.current) {
      const currentRef = canvasRef.current
      width = canvasRef.current.clientWidth //ขนาดของ canvas(pixel)
      height = canvasRef.current.clientHeight //ขนาดของ canvas(pixel)
      aspectRatio = width / height
      // สร้าง scene ใหม่ขึ้นมา พื้นที่เปล่าๆในโลก 3d
      const scene = new THREE.Scene()

      // สร้าง geometry ขึ้นมาเป็น กล่อง
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      // สร้าง material ขึ้นมาเป็น basic
      const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
      // จะรวมเป็น mesh ต้องใช้ geometry(shape) กับ material(shade) สร้างเป็น mesh ขึ้นมา
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh) // add เข้าไปใน scene

      // สร้างกล้องใช้ในการส่องเพื่อ render
      const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
      camera.position.z = 3 // ทำการเคลื่อนย้ายตำแหน่งตามแกน x y z

      // สร้างแสงเพื่อให้มองเห็นใน scene
      const color = 0xff00ff
      const intensity = 3
      const light = new THREE.DirectionalLight(color, intensity)
      light.position.set(-1, 6, 4)
      const light2 = new THREE.DirectionalLight(0x00ffff, 0.2)
      light2.position.set(3, 7, 4)
      scene.add(light)
      scene.add(light2)

      // สร้างตัว render
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(width, height)
      renderer.render(scene, camera)
      renderer.setClearColor('#000000')

      const handleResize = () => {
        width = currentRef.clientWidth
        height = currentRef.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.render(scene, camera)
      }

      window.addEventListener('resize', handleResize)

      const animate = () => {
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
      canvasRef.current.appendChild(renderer.domElement)
    }
  }, [])

  return <div style={{ width: '100%', height: '100%' }} ref={canvasRef}></div>
}

export default ThreePage
