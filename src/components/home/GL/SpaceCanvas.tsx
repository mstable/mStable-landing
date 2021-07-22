import React, { FC, useRef, useMemo, Suspense, ComponentProps } from 'react'
import styled from 'styled-components'
import { useMedia } from 'react-use'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

import { Effects } from './Effects'
import { Lights } from './Lights'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
`

const roundedSquareWave = (t: number, delta: number, a: number, f: number): number =>
  ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

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

      // Oscillates between -0.1 and +0.1 with period of 12 seconds
      const wave = roundedSquareWave(t, 0.1 * dist, 0.1, 1 / 12)

      // Scale initial position by our oscillator
      vec.copy(positions[i]).multiplyScalar(wave + 2)

      // Apply the Vector3 position to the Matrix4
      transform.setPosition(vec)

      // Update Matrix4 for this instance
      ref.current.setMatrixAt(i, transform)
    }
    //    ref.current.rotation.z -= 0.0002
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[null as never, null as never, 480]} position={[0, 0, -1]} scale={4}>
      <planeBufferGeometry args={[0.02, 0.02]} />
      <meshBasicMaterial color="#fff" />
    </instancedMesh>
  )
}

const Background: FC = () => (
  <mesh position={[0, 0, -10]}>
    <planeBufferGeometry attach="geometry" args={[320, 240]} />
    <meshPhongMaterial attach="material" color="#291e4a" />
  </mesh>
)

const canvasProps: Omit<ComponentProps<typeof Canvas>, 'children'> = {
  resize: { scroll: false, debounce: { scroll: 500, resize: 500 } },
  gl: { antialias: false, alpha: true },
  camera: { position: [0, 0, 50] as never, near: 2, far: 100 },
  onCreated: ({ gl }) => gl.setClearColor(0x000000, 0),
}

export const SpaceCanvas: FC = () => {
  const isWide = useMedia('(min-width: 540px)')
  return (
    <Container>
      <Canvas resize={canvasProps.resize} gl={canvasProps.gl} camera={canvasProps.camera} onCreated={canvasProps.onCreated}>
        <Suspense fallback={null}>
          <Background />
          {isWide && <Effects />}
          <DotsGL />
          <Lights />
        </Suspense>
      </Canvas>
    </Container>
  )
}
