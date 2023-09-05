import { Adverts } from '../components/home/Adverts'
import { DataProvider } from '../components/home/DataProvider'
import { Ecosystem } from '../components/home/Ecosystem'
import { Hero } from '../components/home/Hero'
import { Integrations } from '../components/home/Integrations'
import { Products } from '../components/home/Products'
import { Roadmap } from '../components/home/Roadmap'

import type { FC } from 'react'

export const Home: FC = () => {
  return (
    <DataProvider>
      <Hero />
      <Adverts />
      <Roadmap />
      <Products />
      <Ecosystem />
      <Integrations />
    </DataProvider>
  )
}
