/* eslint-disable react/jsx-props-no-spreading */

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styled from 'styled-components'

import type { ComponentProps, FC } from 'react'

const Container = styled.div`
  > div > span > * {
    border-radius: 0.75rem;
  }
`

export const ThemedSkeleton: FC<ComponentProps<typeof Skeleton> & { className?: string }> = (props) => {
  const { className } = props
  return (
    <Container className={className}>
      <SkeletonTheme color={'rgba(255,255,255,0.1)'} highlightColor={'rgba(5, 20, 44, 0.1)'}>
        <Skeleton {...props} />
      </SkeletonTheme>
    </Container>
  )
}
