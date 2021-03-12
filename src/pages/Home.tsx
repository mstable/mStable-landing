import React, { FC } from 'react'

import { About } from '../components/home/About'
import { Partners } from '../components/home/Partners'
import { Intro } from '../components/home/Intro'
import { Security } from '../components/home/Security'
import { Governance } from '../components/home/Governance'
import { Growth } from '../components/home/Growth'
import { Backers } from '../components/home/Backers'
import { DataProvider } from '../components/home/DataProvider'

export const Home: FC = () => {
  return (
    <DataProvider>
      <Intro />
      <About />
      <Growth />
      <Security />
      <Partners />
      <Governance />
      <Backers />
    </DataProvider>
  )
}
