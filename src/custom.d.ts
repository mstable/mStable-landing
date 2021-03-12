declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

declare module '*.png'

declare module '*.jpg'

declare module 'react-element-scroll-hook' {
  interface Coords {
    percentage: number
    value: number
    total: number
    className: 'scroll-left' | 'scroll-middle-x' | 'scroll-right' | 'no-scroll-x'
    direction: number
  }
  const useScrollInfo: () => [{ x: Coords; y: Coords }, (instance: HTMLElement | null) => void, HTMLElement | null]
  export default useScrollInfo
}
