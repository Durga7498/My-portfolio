'use client'

import AnimatedCursor from './AnimatedCursor'

export default function CursorProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedCursor />
      {children}
    </>
  )
}

