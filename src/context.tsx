import React, { createContext, FC, useMemo, useState } from 'react'

export const logoVisibilityCtx = createContext<[boolean, (value: boolean) => void]>([] as never)

export const LogoVisibilityProvider: FC = ({ children }) => {
  const [logoVisibility, setLogoVisibility] = useState(false)

  return (
    <logoVisibilityCtx.Provider value={useMemo(() => [logoVisibility, setLogoVisibility], [logoVisibility, setLogoVisibility])}>
      {children}
    </logoVisibilityCtx.Provider>
  )
}
