import React, { FC } from 'react'

import { Wrapper } from '../components/layout/Wrapper'
import { About } from '../components/home/About'
import { Partners } from '../components/home/Partners'
import { Intro } from '../components/home/Intro'
import { Security } from '../components/home/Security'
import { Governance } from '../components/home/Governance'
import { Growth } from '../components/home/Growth'
import { DataProvider } from '../components/home/DataProvider'

const Home: FC = () => {
  return (
    <Wrapper>
      <DataProvider>
        <Intro />
        <About />
        <Growth />
        <Security />
        <Partners />
        <Governance />
      </DataProvider>
    </Wrapper>
  )
}

export default Home