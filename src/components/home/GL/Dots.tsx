import React, { FC, useRef, useMemo, Suspense, ComponentProps } from 'react'
import styled from 'styled-components'
import { useMedia } from 'react-use'

import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Effects } from './Effects'
import { Lights } from './Lights'

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`

const roundedSquareWave = (t: number, delta: number, a: number, f: number): number => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

const DotsGL: FC = () => {
  const ref = useRef<THREE.InstancedMesh>(null as never)

  const { vec, transform, positions, distances } = useMemo(() => {
    // Variables for intermediary calculations
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()

    // Precompute randomized initial positions (array of Vector3)
    const positions = [...Array(480)].map((_, i) => {
      const position = new THREE.Vector3()

      // Place in a grid
      position.x = (i % 24) - 10
      position.y = Math.floor(i / 24) - 10

      return position
    })

    // Precompute initial distances
    const right = new THREE.Vector3(0, 0, 0)
    const distances = positions.map((pos) => pos.length() + Math.cos(pos.angleTo(right) * 2) * 0.5)
    return { vec, transform, positions, distances }
  }, [])

  useFrame(({ clock }) => {
    for (let i = 0; i < 480; ++i) {
      const dist = distances[i]

      // Distance affects the wave phase
      const t = clock.elapsedTime - dist / 2

      // Oscillates between -0.2 and +0.2 with period of 8 seconds
      const wave = roundedSquareWave(t, 0.2 * dist, 0.2, 1 / 8)

      // Scale initial position by our oscillator
      vec.copy(positions[i]).multiplyScalar(wave + 2)

      // Apply the Vector3 position to the Matrix4
      transform.setPosition(vec)

      // Update Matrix4 for this instance
      ref.current.setMatrixAt(i, transform)
    }
    ref.current.rotation.z += 0.001
    ref.current.rotation.x = -0.5
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[null as never, null as never, 480]} position={[0, -2, -10]} scale={2}>
      <planeBufferGeometry args={[0.05, 0.05]} />
      <meshLambertMaterial color="#888" />
    </instancedMesh>
  )
}

const canvasProps: Omit<ComponentProps<typeof Canvas>, 'children'> = {
  resize: { scroll: false, debounce: { scroll: 500, resize: 500 } },
  gl: { antialias: false, alpha: false },
  camera: { position: [0, 0, 15] as never, near: 2, far: 40 },
  onCreated: ({ gl }) => gl.setClearColor(0x00000000),
}

export const Dots: FC<{ isHome: boolean }> = ({ isHome }) => {
  const isWide = useMedia('(min-width: 540px)')
  return (
    <Container>
      <Canvas resize={canvasProps.resize} gl={canvasProps.gl} camera={canvasProps.camera} onCreated={canvasProps.onCreated}>
        <Suspense fallback={null}>
          {isWide && <Effects alwaysBlur={!isHome} />}
          <Lights />
          <DotsGL />
        </Suspense>
      </Canvas>
    </Container>
  )
}
