'use client'

import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    // Always start with dark theme as per requirements
    setTheme('dark')
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    // For now, just keep it dark as per requirements
    // But the component is ready for future light mode
    setTheme('dark')
    document.documentElement.classList.add('dark')
  }

  return { theme, toggleTheme }
}

