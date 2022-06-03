import './style.css'

import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import { Wrapper } from './components/layout/Wrapper'
import { ThemeProvider } from './context/ThemeProvider'
import { GovernanceTokenMeta } from './pages/GovernanceTokenMeta'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Save } from './pages/Save'

import type { FC } from 'react'

export const App: FC<{ url: string }> = ({ url }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper path="/">
                <Home />
              </Wrapper>
            }
          />
          <Route
            path="save"
            element={
              <Wrapper title="mStable Save" description="High yielding savings accounts powered by the mStable AMM" path="save">
                <Save />
              </Wrapper>
            }
          />
          <Route
            path="governance-token-meta"
            element={
              <Wrapper
                title="mStable Governance Token Meta (MTA)"
                description="Meta (MTA) is the governance token for the DeFi protocol mStable, with staking and yield farming rewards"
                path="governance-token-meta"
              >
                <GovernanceTokenMeta />
              </Wrapper>
            }
          />
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
}
