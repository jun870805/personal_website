import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from '../components/Loader'
import NotFound from '../components/NotFound'

const Home = React.lazy(() => import('../pages/Home'))

const SwitchRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default SwitchRoutes
