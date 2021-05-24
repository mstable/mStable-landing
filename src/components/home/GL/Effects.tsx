import React, { FC, useRef, ComponentProps } from 'react'
import { useWindowScroll } from 'react-use'

import { EffectComposer, Vignette, SMAA, DepthOfField } from '@react-three/postprocessing'
import { useFrame } from '@react-three/fiber'

export const Effects: FC<{ alwaysBlur?: boolean }> = ({ alwaysBlur = false }) => {
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
