import { useRef, useEffect } from 'react'
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection'
import Webcam from 'react-webcam'
import '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'
import '@mediapipe/face_mesh'
import { drawMesh } from '../util/utilities'

const FaceDetectPage = (): JSX.Element => {
  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  //load facemesh

  const loadModel = async () => {
    const model = await faceLandmarksDetection.load(
      faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
    )
    // detect(model)
    setInterval(() => {
      detect(model)
    }, 100)
  }

  useEffect(() => {
    loadModel()
  }, [])

  const detect = async (model: any) => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      if (canvasRef.current) {
        canvasRef.current.width = videoWidth
        canvasRef.current.height = videoHeight
      }

      const faces = await model.estimateFaces({ input: video })
      console.log(faces)

      const ctx = canvasRef.current?.getContext('2d')
      drawMesh(faces, ctx)
    }
  }

  return (
    <div>
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          className="test"
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  )
}

export default FaceDetectPage
