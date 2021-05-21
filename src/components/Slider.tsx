import React, { FC, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import useInterval from 'react-use/lib/useInterval'
import useSlider from 'use-slider'
import 'use-slider/lib/slider.min.css'

const DURATION = 9000

const Line = styled.div`
  position: relative;
  width: 3rem;
  height: 2px;
  background: rgba(215, 215, 215, 0.2);
`

const Remaining = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  transition: width 0.3s ease;
  background: rgba(222, 222, 222, 0.4);
`

const Container = styled.div`
  overflow: hidden;
`

const Controls: FC<{ remaining: number; current: number; length: number }> = ({ remaining, current, length }) => {
  return (
    <Line>
      <Remaining style={{ width: `${remaining}%` }} />
    </Line>
  )
}

const Slides: FC<{ curIndex: number }> = ({ children, curIndex }) => {
  // Force re-mounting with the key when the index changes, so that animations
  // restart on each slide
  return <React.Fragment key={curIndex}>{children}</React.Fragment>
}

export const Slider: FC<{ className?: string }> = ({ children, className }) => {
  const length: number = (children as JSX.Element[]).length
  const { ref, curIndex } = useSlider({
    autoPlay: true,
    loop: true,
    speed: 200,
    duration: DURATION,
  })

  const [remaining, setRemaining] = useState(DURATION)

  useLayoutEffect(() => {
    setRemaining(DURATION)
  }, [curIndex])

  useInterval(() => {
    setRemaining(Math.max(remaining - 1000, 0))
  }, 1000)

  return (
    <Container className={className}>
      <Controls remaining={+((remaining / DURATION) * 100).toFixed(1)} current={curIndex + 1} length={length} />
      <div ref={ref as (instance: HTMLDivElement) => void}>
        <Slides curIndex={curIndex}>{children}</Slides>
      </div>
    </Container>
  )
}
