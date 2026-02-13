'use client'

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/lib/theme"
import { ThemeProvider } from "@/contexts/ThemeContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ChakraProvider value={system}>
        {children}
      </ChakraProvider>
    </ThemeProvider>
  )
}
