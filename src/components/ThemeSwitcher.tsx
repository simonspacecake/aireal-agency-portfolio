'use client'

import { Box, HStack, Text } from "@chakra-ui/react"
import { useTheme } from "@/contexts/ThemeContext"
import { HiTerminal } from "react-icons/hi"

export default function ThemeSwitcher() {
  const { currentTheme, themeName, setTheme, availableThemes } = useTheme()

  return (
    <Box
      className="terminal-window"
      p={4}
      borderRadius="md"
    >
      <HStack mb={3} align="center">
        <HiTerminal color="var(--cli-primary)" size={20} />
        <Text
          fontWeight="bold"
          fontSize="sm"
          color="cli.primary"
          fontFamily="mono"
        >
          $ theme --select
        </Text>
      </HStack>

      <Box display="flex" flexDirection="column" gap={2}>
        {Object.keys(availableThemes).map((theme) => (
          <Box
            key={theme}
            onClick={() => setTheme(theme)}
            cursor="pointer"
            p={3}
            borderRadius="sm"
            bg={themeName === theme ? "cli.bgHighlight" : "cli.bgAlt"}
            borderWidth="1px"
            borderColor={themeName === theme ? "cli.primary" : "cli.border"}
            transition="all 0.2s"
            _hover={{
              borderColor: "cli.primary",
              transform: "translateX(4px)",
            }}
          >
            <HStack justify="space-between">
              <HStack>
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  color={themeName === theme ? "cli.primary" : "cli.fg"}
                  fontWeight={themeName === theme ? "bold" : "normal"}
                >
                  {themeName === theme ? ">" : " "} {availableThemes[theme].name}
                </Text>
              </HStack>

              <HStack gap={1}>
                <Box
                  w="12px"
                  h="12px"
                  borderRadius="sm"
                  bg={availableThemes[theme].colors.primary}
                />
                <Box
                  w="12px"
                  h="12px"
                  borderRadius="sm"
                  bg={availableThemes[theme].colors.secondary}
                />
                <Box
                  w="12px"
                  h="12px"
                  borderRadius="sm"
                  bg={availableThemes[theme].colors.accent}
                />
              </HStack>
            </HStack>
          </Box>
        ))}
      </Box>

      <Text
        mt={3}
        fontSize="xs"
        color="cli.comment"
        fontFamily="mono"
      >
        Theme: {currentTheme.name} | Press to switch
      </Text>
    </Box>
  )
}
