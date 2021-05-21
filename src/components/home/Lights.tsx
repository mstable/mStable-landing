import { useFrame } from '@react-three/fiber'
import React, { FC, useRef } from 'react'
import { useWindowScroll } from 'react-use'

export const Lights: FC = () => {
  const point1 = useRef<THREE.PointLight>(null as never)
  const point2 = useRef<THREE.PointLight>(null as never)
  const spot1 = useRef<THREE.SpotLight>(null as never)
  const spot2 = useRef<THREE.SpotLight>(null as never)
  const spot3 = useRef<THREE.SpotLight>(null as never)
  const spot4 = useRef<THREE.SpotLight>(null as never)

  const { y } = useWindowScroll()

  useFrame(() => {
    if (y > 500) {
      if (point1.current.intensity > 0.5) point1.current.intensity -= 0.1
      if (point2.current.intensity > 0.5) point2.current.intensity -= 0.1
      if (spot1.current.intensity > 0.5) spot1.current.intensity -= 0.1
      if (spot2.current.intensity > 0.5) spot2.current.intensity -= 0.1
      if (spot3.current.intensity > 0.5) spot3.current.intensity -= 0.1
      if (spot4.current.intensity > 0.5) spot4.current.intensity -= 0.1
      return
    }

    if (point1.current.intensity < 2.5) {
      point1.current.intensity += 0.05
      point2.current.intensity += 0.05
    }

    if (spot1.current.intensity < 1) {
      spot1.current.intensity += 0.01
      spot2.current.intensity += 0.01
    }

    if (spot3.current.intensity < 1) {
      spot3.current.intensity += 0.01
    }

    if (spot4.current.intensity < 2.5) {
      spot4.current.intensity += 0.01
    }
  })
  return (
    <>
      <pointLight ref={point1} color="blue" intensity={0.25} position={[-11, 1, 10]} />
      <pointLight ref={point2} color="gold" intensity={0.25} position={[11, 1, 10]} />
      <spotLight ref={spot1} color="white" intensity={0.25} position={[15, -1, 10]} angle={15} penumbra={2} />
      <spotLight ref={spot2} color="white" intensity={0.25} position={[-15, -1, 12]} angle={15} penumbra={2} />
      <spotLight ref={spot3} color="white" intensity={0.25} position={[0, 0, 15]} angle={15} penumbra={2} />
      <spotLight ref={spot4} color="red" intensity={0.25} position={[0, 0, -15]} angle={15} penumbra={2} />
    </>
  )
}
