import React, { FC, useRef } from 'react'
import styled from 'styled-components'
import useMedia from 'react-use/lib/useMedia'
import useAsync from 'react-use/lib/useAsync'
import Skeleton from 'react-loading-skeleton/lib'
import { useInView } from 'react-hook-inview'

const Container = styled.div`
  > * {
    overflow: hidden;
    font-family: 'DM Mono', monospace;
  }
`

export const Graph = <T extends unknown>({
  url,
  component: GraphComponent,
  asset,
}: {
  asset: 'musd' | 'mbtc'
  url: string
  component: FC<{ data: T; isMobile: boolean; asset: 'musd' | 'mbtc' }>
}) => {
  const isMobile = useMedia('(max-width: 400px)')
  const fetched = useRef<boolean>(false)
  const [ref, inView] = useInView({
    unobserveOnEnter: true,
  })

  const { loading, value } = useAsync(async (): Promise<T | void> => {
    if (inView && !fetched.current) {
      const response = await fetch(url)
      const json = await response.json()
      fetched.current = true
      return json
    }
  }, [url, inView])

  return (
    <Container ref={ref}>
      {loading ? <Skeleton height={150} /> : <GraphComponent data={value as T} isMobile={isMobile} asset={asset} />}
    </Container>
  )
}
