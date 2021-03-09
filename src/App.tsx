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
        <Wrapper>
          <Switch>
            {routes.map((route) => (
              <Route path={route.path} exact key={route.path}>
                {<route.component />}
              </Route>
            ))}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Wrapper>
      </LogoVisibilityProvider>
    </HelmetProvider>
  )
}
