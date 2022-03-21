import { Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import OverviewPage from '../pages/OverviewPage'
import StatsPage from '../pages/StatsPage'
import ParallaxPage from '../pages/ParallaxPage'
import WebglPage from '../pages/WebglPage'
import ThreePage from '../pages/ThreePage'
import ScrollsmoothPage from '../pages/ScrollsmoothPage'
import FaceDetectPage from '../pages/FaceDetectPage'
import SwipePage from '../pages/SwipePage'

const Routers = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/stats/*" element={<StatsPage />} />
      <Route path="/three/*" element={<ThreePage />} />
    </Route>
    <Route path="/parallax/*" element={<ParallaxPage />} />
    <Route path="/webgl/*" element={<WebglPage />} />
    <Route path="/scroll/*" element={<ScrollsmoothPage />} />
    <Route path="/faceDetect/*" element={<FaceDetectPage />} />
    <Route path="/swipe/*" element={<SwipePage />} />
  </Routes>
)

export default Routers
