import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { LogoVisibilityProvider } from './context'
import { Wrapper } from './components/layout/Wrapper'
import { NotFound } from './pages/NotFound'
import { routes } from './routes'
import './style.css'

export const App: FC = () => {
  return (
    <HelmetProvider>
      <LogoVisibilityProvider>
        <Switch>
          {routes.map(({ path, seo: { title, description }, component: RouteComponent }) => (
            <Route path={path} exact key={path}>
              <Wrapper title={title} description={description} path={path}>
                <RouteComponent />
              </Wrapper>
            </Route>
          ))}
          <Route path="*">
            <Wrapper path={'/404'}>
              <NotFound />
            </Wrapper>
          </Route>
        </Switch>
      </LogoVisibilityProvider>
    </HelmetProvider>
  )
}
