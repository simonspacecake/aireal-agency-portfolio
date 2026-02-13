'use client'

import { Box, Container, Heading, Text, Stack, HStack } from "@chakra-ui/react"
import CTAButton from "./CTAButton"

interface HeroProps {
  title: string
  subtitle: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <Box
      bgGradient="linear(to-br, brand.50, accent.50)"
      _dark={{
        bgGradient: "linear(to-br, gray.900, brand.900)",
      }}
      py={{ base: 20, md: 32 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        width="500px"
        height="500px"
        borderRadius="full"
        bgGradient="linear(to-br, brand.200, accent.200)"
        opacity={0.2}
        filter="blur(80px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        width="400px"
        height="400px"
        borderRadius="full"
        bgGradient="linear(to-tr, accent.200, brand.200)"
        opacity={0.2}
        filter="blur(80px)"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack gap={6} maxW="3xl" mx="auto" textAlign="center">
          <Heading
            size={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="black"
            lineHeight="1.1"
            bgGradient="linear(to-r, brand.600, accent.600)"
            bgClip="text"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.700"
            _dark={{ color: "gray.300" }}
            maxW="2xl"
            mx="auto"
          >
            {subtitle}
          </Text>

          {(primaryCTA || secondaryCTA) && (
            <HStack justify="center" gap={4} mt={4} flexWrap="wrap">
              {primaryCTA && (
                <CTAButton href={primaryCTA.href} size="lg" variant="primary">
                  {primaryCTA.text}
                </CTAButton>
              )}
              {secondaryCTA && (
                <CTAButton href={secondaryCTA.href} size="lg" variant="outline">
                  {secondaryCTA.text}
                </CTAButton>
              )}
            </HStack>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
