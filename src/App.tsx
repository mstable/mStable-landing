import './style.css'

import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import { Wrapper } from './components/layout/Wrapper'
import { ThemeProvider } from './context/ThemeProvider'
import { NotFound } from './pages/NotFound'
import { routes } from './routes'

import type { FC } from 'react'

export const App: FC = () => (
  <HelmetProvider>
    <ThemeProvider>
      <Routes>
        {routes.map(({ path, seo: { title, description }, component: RouteComponent }) => (
          <Route
            path={path}
            key={path}
            element={
              <Wrapper title={title} description={description} path={path}>
                <RouteComponent />
              </Wrapper>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <Wrapper path={'/404'}>
              <NotFound />
            </Wrapper>
          }
        />
      </Routes>
    </ThemeProvider>
  </HelmetProvider>
)
