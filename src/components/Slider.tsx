import React, { FC, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import useInterval from 'react-use/lib/useInterval'
import useSlider from 'use-slider'
import 'use-slider/lib/slider.min.css'

const DURATION = 9000

const CurrentSlide = styled.div`
  font-weight: bold;
  font-family: 'DM Mono', monospace;
  font-size: 14px;
`

const Line = styled.div`
  position: relative;
  width: 100px;
  height: 8px;
  background: rgba(215, 215, 215, 0.3);
`

const Remaining = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  transition: width 0.3s ease;
  background: rgba(222, 222, 222, 0.6);
`

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  color: rgba(225, 225, 225, 0.6);
  justify-content: center;

  // flex-gap polyfill fail
  > * {
    margin-right: 16px;
  }
`

const Container = styled.div`
  overflow: hidden;
  > :first-child {
    margin-bottom: 1rem;
  }
`

const Controls: FC<{ remaining: number; current: number; length: number }> = ({ remaining, current, length }) => {
  return (
    <ControlsContainer>
      <CurrentSlide>
        {current}/{length}
      </CurrentSlide>
      <Line>
        <Remaining style={{ width: `${remaining}%` }} />
      </Line>
    </ControlsContainer>
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
      <div ref={ref as (instance: HTMLDivElement) => void}>
        <Slides curIndex={curIndex}>{children}</Slides>
      </div>
      <Controls remaining={+((remaining / DURATION) * 100).toFixed(1)} current={curIndex + 1} length={length} />
    </Container>
  )
}
