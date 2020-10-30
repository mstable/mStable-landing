import React, { FC } from 'react'

import { Page } from '../components/layout/Page'
import { About } from '../components/home/About'
import { Partners } from '../components/home/Partners'
import { Intro } from '../components/home/Intro'
import { Security } from '../components/home/Security'
import { Governance } from '../components/home/Governance'
import { Growth } from '../components/home/Growth'
import { DataProvider } from '../components/home/DataProvider'

const Home: FC = () => {
  return (
    <Page>
      <DataProvider>
        <Intro />
        <About />
        <Growth />
        <Security />
        <Partners />
        <Governance />
      </DataProvider>
    </Page>
  )
}

export default Home
