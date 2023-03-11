import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import NotFound from '../components/NotFound'
import SystemError from '../components/SystemError'
import AboutMe from '../pages/AboutMe'
import BasicLayout from '../pages/BasicLayout'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'

const Home = React.lazy(() => import('../pages/Home'))

const SwitchRoutes = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [pathname])

  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/error" element={<SystemError />} />
          <Route path="/loading" element={<Loader />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default SwitchRoutes
