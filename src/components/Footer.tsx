'use client'

import { Box, Container, Grid, Stack, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import MockLogo from "./MockLogo"

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Studio", href: "/studio" },
    { label: "Tech Stack", href: "/tech-stack" },
    { label: "AI Workflow", href: "/ai-workflow" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "GitHub", href: "#", icon: FaGithub },
    { label: "LinkedIn", href: "#", icon: FaLinkedin },
    { label: "Twitter", href: "#", icon: FaTwitter },
  ],
}

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.50"
      borderTop="1px solid"
      borderColor="gray.200"
      py={12}
      _dark={{ bg: "gray.900", borderColor: "gray.700" }}
    >
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
          gap={8}
          mb={8}
        >
          {/* Company Info */}
          <Stack gap={4}>
            <MockLogo size="md" />
            <Text color="gray.600" _dark={{ color: "gray.400" }} maxW="sm">
              AI-powered development agency specializing in cutting-edge web applications,
              machine learning solutions, and innovative software development.
            </Text>
            <HStack gap={4}>
              {footerLinks.social.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label}>
                  <Box
                    as={social.icon}
                    fontSize="xl"
                    color="gray.600"
                    _hover={{ color: "brand.500" }}
                    transition="color 0.2s"
                  />
                </Link>
              ))}
            </HStack>
          </Stack>

          {/* Navigation Links */}
          <Stack gap={3}>
            <Text fontWeight="semibold" fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
              Navigation
            </Text>
            {footerLinks.navigation.map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _hover={{ color: "brand.500" }}
                  transition="color 0.2s"
                  _dark={{ color: "gray.400" }}
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </Stack>

          {/* Contact Info */}
          <Stack gap={3}>
            <Text fontWeight="semibold" fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
              Contact
            </Text>
            <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
              Email: hello@aiagency.dev
            </Text>
            <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
              Phone: +1 (555) 123-4567
            </Text>
            <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
              Available: Mon-Fri, 9AM-6PM EST
            </Text>
          </Stack>
        </Grid>

        <Box
          pt={8}
          borderTop="1px solid"
          borderColor="gray.200"
          _dark={{ borderColor: "gray.700" }}
        >
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }} textAlign="center">
            © {new Date().getFullYear()} AI Dev Agency. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
