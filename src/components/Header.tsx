'use client'

import { Box, HStack, Text } from "@chakra-ui/react"
import { useState } from "react"
import Link from "next/link"
import { HiMenu, HiX, HiTerminal } from "react-icons/hi"

const navLinks = [
  { label: "home", href: "/" },
  { label: "lookbook", href: "/lookbook" },
  { label: "studio", href: "/studio" },
  { label: "tech-stack", href: "/tech-stack" },
  { label: "ai-workflow", href: "/ai-workflow" },
  { label: "brand", href: "/brand" },
  { label: "components", href: "/components" },
  { label: "contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="var(--z-sticky)"
      background="var(--cli-bg)"
      borderBottom="var(--border-width) solid var(--cli-border)"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(40, 42, 54, 0.95)',
      }}
    >
      <Box className="container" py="var(--space-3)">
        <HStack justify="space-between">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <HStack gap="var(--space-2)">
              <HiTerminal size={24} color="var(--cli-primary)" />
              <Text
                fontFamily="var(--font-display)"
                fontSize="var(--text-lg)"
                fontWeight="var(--font-bold)"
                color="var(--cli-fg)"
              >
                <Text as="span" color="var(--cli-primary)">$</Text> ai-agency
              </Text>
            </HStack>
          </Link>

          {/* Desktop Navigation */}
          <HStack gap="var(--space-6)" display={{ base: "none", lg: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--cli-fgAlt)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--cli-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--cli-fgAlt)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          {/* CTA Button */}
          <HStack gap="var(--space-4)">
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Box
                className="btn btn-primary"
                display={{ base: "none", md: "inline-flex" }}
              >
                --hire-us
              </Box>
            </Link>

            {/* Mobile Menu Button */}
            <Box
              display={{ base: "flex", lg: "none" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              cursor="pointer"
              p="var(--space-2)"
              color="var(--cli-primary)"
              transition="transform var(--transition-base)"
              _hover={{ transform: "scale(1.1)" }}
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </Box>
          </HStack>
        </HStack>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <Box
            mt="var(--space-4)"
            pt="var(--space-4)"
            borderTop="var(--border-width) solid var(--cli-border)"
            display={{ base: "block", lg: "none" }}
          >
            <Box display="flex" flexDirection="column" gap="var(--space-3)">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--cli-fgAlt)',
                    textDecoration: 'none',
                    padding: 'var(--space-2) 0',
                    transition: 'color var(--transition-base)',
                  }}
                >
                  <Text as="span" color="var(--cli-primary)">$ </Text>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary" mt="var(--space-2)">
                  --hire-us
                </Box>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
