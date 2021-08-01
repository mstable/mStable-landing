import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeProvider'

import { Wrapper } from './components/layout/Wrapper'
import { NotFound } from './pages/NotFound'
import { routes } from './routes'
import './style.css'

export const App: FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Switch>
          {routes.map(({ path, seo: { title, description }, isHome, component: RouteComponent }) => (
            <Route path={path} exact key={path}>
              <Wrapper title={title} description={description} path={path} isHome={isHome}>
                <RouteComponent />
              </Wrapper>
            </Route>
          ))}
          <Route path="*">
            <Wrapper path={'/404'} isHome={false}>
              <NotFound />
            </Wrapper>
          </Route>
        </Switch>
      </ThemeProvider>
    </HelmetProvider>
  )
}
