import { useGLTF } from '@react-three/drei'
import { Canvas, RenderCallback, useFrame } from '@react-three/fiber'
import React, { ComponentProps, FC, MutableRefObject, Suspense, useRef } from 'react'
import styled from 'styled-components'
import { Group } from 'three'
import { Effects } from './Effects'
import { Lights } from './Lights'

const Container = styled.div`
  display: flex;
  height: 24rem;
  width: 100%;
`

const floatEffect = (group: MutableRefObject<Group>, timeOffset: number): RenderCallback => ({ clock }) => {
  const t = clock.getElapsedTime() + timeOffset
  // Gently rotate and float up and down
  group.current.rotation.x -= Math.sin(t * 0.5) / 300
  group.current.position.y += Math.sin(t * 0.25) / 300
  group.current.rotation.z -= Math.cos(t * 0.28) / 1200
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
        geometry={(nodes._9ed88209_ea31_436a_be4f_464f9621b8d3 as any).geometry as never}
        material={(nodes._9ed88209_ea31_436a_be4f_464f9621b8d3 as any).material as never}
      />
    </group>
  )
}

const CoinsGL: FC = () => {
  return (
    <>
      <Asset asset="musd" timeOffset={4} position={[25, -4.5, -6.5]} scale={120} rotation={[1.5, 0, 0]} />
      <Asset asset="mbtc" timeOffset={8} position={[-25, -4, -6.5]} scale={120} rotation={[1.5, 0, 0]} />
      <Asset asset="mta" timeOffset={0} position={[0, 5, -6.5]} scale={150} rotation={[2, 0, 0]} />
    </>
  )
}

const canvasProps: Omit<ComponentProps<typeof Canvas>, 'children'> = {
  resize: { scroll: false, debounce: { scroll: 400, resize: 400 } },
  gl: { antialias: true, alpha: true },
  camera: { position: [0, 0, 15] as never, near: 2, far: 40 },
  onCreated: ({ gl }) => {
    gl.setClearColor(0x000000, 0)
  },
}

export const Coins: FC = () => {
  return (
    <Container>
      <Canvas resize={canvasProps.resize} gl={canvasProps.gl} camera={canvasProps.camera} onCreated={canvasProps.onCreated}>
        <Suspense fallback={null}>
          <Effects />
          <Lights />
          <CoinsGL />
        </Suspense>
      </Canvas>
    </Container>
  )
}

useGLTF.preload('/assets/mta.gltf')
useGLTF.preload('/assets/musd.gltf')
useGLTF.preload('/assets/mbtc.gltf')
