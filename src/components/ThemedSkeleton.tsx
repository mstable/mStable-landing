/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentProps, FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styled from 'styled-components'
import { Colors } from '../theme'

const Container = styled.div`
  > div > span > * {
    border-radius: 0.75rem;
  }
`

export const ThemedSkeleton: FC<ComponentProps<typeof Skeleton> & { className?: string }> = (props) => {
  const { className } = props
  return (
    <Container className={className}>
      <SkeletonTheme color={Colors.darkGrey} highlightColor={Colors.darkerGrey}>
        <Skeleton {...props} />
      </SkeletonTheme>
    </Container>
  )
}
