import React, { FC, useRef, useMemo, Suspense, MutableRefObject, ComponentProps } from 'react'
import styled from 'styled-components'
import { useWindowScroll, useMedia } from 'react-use'

import * as THREE from 'three'
import type { Group } from 'three'
import { EffectComposer, Vignette, SMAA, DepthOfField } from '@react-three/postprocessing'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame, RenderCallback } from '@react-three/fiber'

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`

const floatEffect = (group: MutableRefObject<Group>, timeOffset: number): RenderCallback => ({ clock }) => {
  const t = clock.getElapsedTime() + timeOffset
  // Gently rotate and float up and down
  group.current.rotation.x -= Math.sin(t * 0.5) / 300
  group.current.rotation.z -= Math.cos(t * 0.28) / 1200
  group.current.rotation.y += Math.sin(t * 0.2) / 800
  group.current.position.y += Math.sin(t * 0.25) / 100
  group.current.position.z -= Math.sin(t * 0.09) / 2000
}

type AssetProps = JSX.IntrinsicElements['group'] & {
  asset: 'musd' | 'mbtc' | 'mta'
  timeOffset: number
}

const Asset: FC<AssetProps> = ({ asset, timeOffset, position, scale, rotation }) => {
  const group = useRef<Group>(null as never)
  const { nodes } = useGLTF(`/assets/${asset}.gltf`)
  useFrame(floatEffect(group, timeOffset))

  return (
    <group ref={group} dispose={null} position={position} scale={scale} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes._9ed88209_ea31_436a_be4f_464f9621b8d3 as any).geometry as never}
        material={(nodes._9ed88209_ea31_436a_be4f_464f9621b8d3 as any).material as never}
      />
    </group>
  )
}

const Assets: FC = () => {
  return (
    <>
      <Asset asset="musd" timeOffset={4} position={[9, 1, -6.5]} scale={50} rotation={[1, 0, 0]} />
      <Asset asset="mbtc" timeOffset={8} position={[-9, 1, -6.5]} scale={50} rotation={[1, 0, 0]} />
      <Asset asset="mta" timeOffset={0} position={[0, 2, -6.5]} scale={70} rotation={[2, 0, 0]} />
    </>
  )
}

const Effects: FC<{ alwaysBlur: boolean }> = ({ alwaysBlur }) => {
  const { y } = useWindowScroll()
  const depthRef = useRef<ComponentProps<typeof DepthOfField>>(null as never)
  const bokehScale = useRef<number>(alwaysBlur ? 4 : 0)

  useFrame(() => {
    if (alwaysBlur) return

    if (y > 500 && bokehScale.current < 4) {
      bokehScale.current += 0.1
    } else if (y < 500 && bokehScale.current > 0) {
      bokehScale.current -= 0.1
    }

    ;(depthRef.current as any).bokehScale = bokehScale.current
  })

  return (
    <EffectComposer>
      <SMAA />
      <DepthOfField ref={depthRef} bokehScale={bokehScale.current} />
      <Vignette eskil={false} offset={0} darkness={0.75} />
    </EffectComposer>
  )
}

const Lights: FC = () => {
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
const roundedSquareWave = (t: number, delta: number, a: number, f: number): number => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

const Dots: FC = () => {
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

export const Coins: FC<{ isHome: boolean }> = ({ isHome }) => {
  const isWide = useMedia('(min-width: 540px)')
  return (
    <Container>
      <Canvas resize={canvasProps.resize} gl={canvasProps.gl} camera={canvasProps.camera} onCreated={canvasProps.onCreated}>
        <Suspense fallback={null}>
          {isWide && <Effects alwaysBlur={!isHome} />}
          <Lights />
          <Dots />
          {isHome && <Assets />}
        </Suspense>
      </Canvas>
    </Container>
  )
}

useGLTF.preload('/assets/mta.gltf')
useGLTF.preload('/assets/musd.gltf')
useGLTF.preload('/assets/mbtc.gltf')
