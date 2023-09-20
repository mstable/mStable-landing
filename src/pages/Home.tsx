import { DataProvider } from '../components/home/DataProvider'
import { Ecosystem } from '../components/home/Ecosystem'
import { Hero } from '../components/home/Hero'
import { Integrations } from '../components/home/Integrations'
import { Products } from '../components/home/Products'

import type { FC } from 'react'

export const Home: FC = () => {
  return (
    <DataProvider>
      <Hero />
      <Products />
      <Ecosystem />
      <Integrations />
    </DataProvider>
  )
}
