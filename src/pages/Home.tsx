import { Adverts } from '../components/home/Adverts'
import { Banner } from '../components/home/Banner'
import { BigStats } from '../components/home/BigStats'
import { DataProvider } from '../components/home/DataProvider'
import { Ecosystem } from '../components/home/Ecosystem'
import { Govern } from '../components/home/Govern'
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
      <BigStats />
      <Banner />
      <Roadmap />
      <Products />
      <Ecosystem />
      <Integrations />
      <Govern />
    </DataProvider>
  )
}
