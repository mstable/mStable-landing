import React, { FC } from 'react'

import { Products } from '../components/home/Products'
import { Integrations } from '../components/home/Integrations'
import { Intro } from '../components/home/Intro'
import { Govern } from '../components/home/Govern'
import { Backers } from '../components/home/Backers'
import { DataProvider } from '../components/home/DataProvider'

export const Home: FC = () => {
  return (
    <DataProvider>
      <Intro />
      <Products />
      <Integrations />
      <Govern />
      <Backers />
    </DataProvider>
  )
}
