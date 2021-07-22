import * as THREE from 'three'
import React, { FC, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const roundedSquareWave = (t: number, delta: number, amp: number, freq: number): number =>
  ((2 * amp) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * freq) / delta)

export const Lights: FC = () => {
  const point1 = useRef<THREE.PointLight>(null as never)

  useFrame(({ clock }) => {
    const intensityWave = roundedSquareWave(clock.elapsedTime, 1, 0.03, 1 / 16)
    const xWave = roundedSquareWave(clock.elapsedTime, 1, 0.2, 1 / 16)
    const yWave = roundedSquareWave(clock.elapsedTime, 1, 0.8, 1 / 8)

    point1.current.intensity += intensityWave
    point1.current.position.x += xWave
    point1.current.position.y += yWave
  }, 2)

  return (
    <>
      <pointLight ref={point1} color="#291e4a" intensity={4} position={[0, 200, 500]} />
    </>
  )
}
