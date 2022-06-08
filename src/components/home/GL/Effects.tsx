import { EffectComposer, SMAA, Vignette } from '@react-three/postprocessing'

import type { FC } from 'react'

export const Effects: FC = () => (
  <EffectComposer>
    <Vignette eskil={false} offset={0} darkness={0.4} />
    <SMAA />
  </EffectComposer>
)
