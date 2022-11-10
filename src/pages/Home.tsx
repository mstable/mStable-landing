import { DataProvider } from '../components/home/DataProvider'
import { Govern } from '../components/home/Govern'
import { Integrations } from '../components/home/Integrations'
import { Intro } from '../components/home/Intro'
import { Products } from '../components/home/Products'

import type { FC } from 'react'

export const Home: FC = () => {
  return (
    <DataProvider>
      <Intro />
      <Products />
      <Integrations />
      <Govern />
      {/* <Backers /> */}
    </DataProvider>
  )
}
