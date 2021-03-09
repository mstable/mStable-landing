import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { LogoVisibilityProvider } from './context'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Wrapper } from './components/layout/Wrapper'

export const App: FC = () => (
  <LogoVisibilityProvider>
    <Router>
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  </LogoVisibilityProvider>
)
