'use client'

import { Box, Grid, Stack, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { HiCode, HiMail } from "react-icons/hi"

const footerLinks = {
  navigation: [
    { label: "home", href: "/" },
    { label: "lookbook", href: "/lookbook" },
    { label: "studio", href: "/studio" },
    { label: "tech-stack", href: "/tech-stack" },
    { label: "ai-workflow", href: "/ai-workflow" },
    { label: "brand", href: "/brand" },
    { label: "components", href: "/components" },
    { label: "contact", href: "/contact" },
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
      background="var(--cli-bgAlt)"
      borderTop="var(--border-width-thick) solid var(--cli-border)"
      py="var(--space-12)"
    >
      <Box className="container">
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
          gap="var(--space-8)"
          mb="var(--space-8)"
        >
          {/* Company Info */}
          <Stack gap="var(--space-4)">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Image
                src="/logo.png"
                alt="AIreal.agency"
                width={180}
                height={40}
                style={{ height: 'auto', maxWidth: '180px' }}
              />
            </Link>
            <Text
              fontFamily="var(--font-mono)"
              fontSize="var(--text-sm)"
              color="var(--cli-fgAlt)"
              maxW="sm"
              lineHeight="var(--leading-relaxed)"
            >
              # We ship real User eXperiences
              <br />
              # Terminal-first, developer-native
              <br />
              # Build faster, deploy smarter
            </Text>
            <HStack gap="var(--space-3)" mt="var(--space-2)">
              {footerLinks.social.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label}>
                  <Box
                    as={social.icon}
                    fontSize="var(--text-xl)"
                    color="var(--cli-fgAlt)"
                    cursor="pointer"
                    transition="all var(--transition-base)"
                    _hover={{
                      color: "var(--cli-primary)",
                      transform: "translateY(-2px)",
                    }}
                  />
                </Link>
              ))}
            </HStack>
          </Stack>

          {/* Navigation Links */}
          <Stack gap="var(--space-2)">
            <Text
              fontFamily="var(--font-mono)"
              fontWeight="var(--font-semibold)"
              fontSize="var(--text-sm)"
              color="var(--cli-primary)"
              mb="var(--space-2)"
            >
              $ ls -la ./pages
            </Text>
            {footerLinks.navigation.map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  fontFamily="var(--font-mono)"
                  fontSize="var(--text-sm)"
                  color="var(--cli-fgAlt)"
                  transition="color var(--transition-base)"
                  _hover={{ color: "var(--cli-primary)" }}
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </Stack>

          {/* Contact Info */}
          <Stack gap="var(--space-3)">
            <Text
              fontFamily="var(--font-mono)"
              fontWeight="var(--font-semibold)"
              fontSize="var(--text-sm)"
              color="var(--cli-primary)"
              mb="var(--space-2)"
            >
              $ cat contact.txt
            </Text>

            <HStack gap="var(--space-2)">
              <HiMail size={16} color="var(--cli-accent)" />
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-fgAlt)"
              >
                hello@aireal.agency
              </Text>
            </HStack>

            <HStack gap="var(--space-2)">
              <HiCode size={16} color="var(--cli-accent)" />
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-fgAlt)"
              >
                Available 24/7
              </Text>
            </HStack>

            <Text
              fontFamily="var(--font-mono)"
              fontSize="var(--text-xs)"
              color="var(--cli-comment)"
              mt="var(--space-2)"
            >
              Response time: &lt; 24h
            </Text>
          </Stack>
        </Grid>

        <Box
          pt="var(--space-6)"
          borderTop="var(--border-width) solid var(--cli-border)"
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="var(--space-4)">
            <Text
              fontFamily="var(--font-mono)"
              fontSize="var(--text-xs)"
              color="var(--cli-comment)"
            >
              © {new Date().getFullYear()} AIreal.agency. All rights reserved.
              <br />
              Built with Next.js, TypeScript, and Claude Sonnet 4.5
            </Text>
            <Text
              fontFamily="var(--font-mono)"
              fontSize="var(--text-xs)"
              color="var(--cli-comment)"
              textAlign={{ base: "left", md: "right" }}
            >
              <Text as="span" color="var(--cli-success)">✓</Text> CLI-first design
              {" | "}
              <Text as="span" color="var(--cli-success)">✓</Text> Developer-native
              {" | "}
              <Text as="span" color="var(--cli-success)">✓</Text> Open source
            </Text>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
