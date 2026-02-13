'use client'

import { Box, Container, HStack, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"
import MockLogo from "./MockLogo"
import CTAButton from "./CTAButton"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Studio", href: "/studio" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "AI Workflow", href: "/ai-workflow" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="white/80"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="gray.200"
      _dark={{
        bg: "gray.900/80",
        borderColor: "gray.700",
      }}
    >
      <Container maxW="7xl" py={4}>
        <HStack justify="space-between">
          <Link href="/">
            <MockLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          <HStack gap={4}>
            <Box display={{ base: "none", md: "block" }}>
              <CTAButton href="/contact" size="md">
                Get Started
              </CTAButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </IconButton>
          </HStack>
        </HStack>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <Box
            mt={4}
            pt={4}
            borderTop="1px solid"
            borderColor="gray.200"
            _dark={{ borderColor: "gray.700" }}
            display={{ base: "block", md: "none" }}
          >
            <Box display="flex" flexDirection="column" gap={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontWeight: 500,
                    padding: "8px 0",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <CTAButton href="/contact" size="md">
                Get Started
              </CTAButton>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  )
}
