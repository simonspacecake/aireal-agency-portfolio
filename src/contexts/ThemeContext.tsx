'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { cliThemes, defaultTheme, type CLITheme } from '@/lib/cli-themes'

interface ThemeContextType {
  currentTheme: CLITheme
  themeName: string
  setTheme: (themeName: string) => void
  availableThemes: typeof cliThemes
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<string>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('cli-theme')
    if (savedTheme && cliThemes[savedTheme]) {
      setThemeName(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cli-theme', themeName)

      // Apply theme to CSS variables
      const theme = cliThemes[themeName]
      const root = document.documentElement

      Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--cli-${key}`, value)
      })

      root.style.setProperty('--font-mono', theme.fonts.mono)
      root.style.setProperty('--font-display', theme.fonts.display)
    }
  }, [themeName, mounted])

  const setTheme = (newTheme: string) => {
    if (cliThemes[newTheme]) {
      setThemeName(newTheme)
    }
  }

  const value: ThemeContextType = {
    currentTheme: cliThemes[themeName],
    themeName,
    setTheme,
    availableThemes: cliThemes,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
