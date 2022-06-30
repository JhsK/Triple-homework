import React from 'react'
import { ChildrenContainer, LayouContainer } from './style'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayouContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </LayouContainer>
  )
}

export default Layout
