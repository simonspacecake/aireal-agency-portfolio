'use client'

import { Box, Container, Heading, Text, Stack, Grid, HStack } from "@chakra-ui/react"
import Hero from "@/components/Hero"
import ContactForm from "@/components/ContactForm"
import CTAButton from "@/components/CTAButton"
import { HiClock, HiCheckCircle, HiChatAlt2, HiShieldCheck } from "react-icons/hi"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const benefits = [
  {
    icon: HiClock,
    title: "Quick Turnaround",
    description: "Most projects delivered 3x faster than traditional development, without compromising quality.",
  },
  {
    icon: HiCheckCircle,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees. Fixed-price projects available for defined scopes.",
  },
  {
    icon: HiChatAlt2,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Comprehensive support and maintenance packages available.",
  },
  {
    icon: HiShieldCheck,
    title: "Proven Track Record",
    description: "97% on-time delivery rate with an average client satisfaction score of 4.9/5.",
  },
]

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@aiagency.dev",
    action: "mailto:hello@aiagency.dev",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "San Francisco, CA",
    action: null,
  },
]

export default function ContactPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Let's Build Something Amazing"
        subtitle="Ready to transform your ideas into reality? Get in touch and let's discuss how we can help you achieve your goals with AI-powered development."
      />

      {/* Benefits Section */}
      <Box py={{ base: 16, md: 20 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                Why Work With Us
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                maxW="2xl"
                mx="auto"
              >
                We're committed to your success, from the first consultation to long-term support
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap={6}
            >
              {benefits.map((benefit) => (
                <Box
                  key={benefit.title}
                  p={6}
                  bg="gray.50"
                  _dark={{ bg: "gray.900" }}
                  borderRadius="lg"
                  textAlign="center"
                >
                  <Box
                    as={benefit.icon}
                    fontSize="3xl"
                    color="brand.500"
                    mb={4}
                    mx="auto"
                    width="fit-content"
                  />
                  <Heading size="md" mb={2}>
                    {benefit.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                    {benefit.description}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="start">
            <Stack gap={8}>
              <Box>
                <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                  Get In Touch
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.600"
                  _dark={{ color: "gray.400" }}
                >
                  Fill out the form and we'll get back to you within 24 hours. For urgent inquiries,
                  feel free to email or call us directly.
                </Text>
              </Box>

              <Stack gap={4}>
                <Heading size="lg" mb={2}>
                  What Happens Next?
                </Heading>
                {[
                  "We'll review your inquiry and project details",
                  "Schedule a free 30-minute discovery call",
                  "Discuss your goals, timeline, and budget",
                  "Provide a detailed proposal and timeline",
                  "Start building your project",
                ].map((step, index) => (
                  <HStack key={index} align="start">
                    <Box
                      minW="28px"
                      h="28px"
                      borderRadius="full"
                      bg="brand.500"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                      fontSize="sm"
                      mt={0.5}
                    >
                      {index + 1}
                    </Box>
                    <Text color="gray.700" _dark={{ color: "gray.300" }}>
                      {step}
                    </Text>
                  </HStack>
                ))}
              </Stack>

              <Box>
                <Heading size="lg" mb={4}>
                  Other Ways to Connect
                </Heading>
                <Stack gap={4}>
                  {contactMethods.map((method) => (
                    <HStack
                      key={method.label}
                      p={4}
                      bg="white"
                      _dark={{ bg: "gray.800" }}
                      borderRadius="md"
                      cursor={method.action ? "pointer" : "default"}
                      transition="all 0.2s"
                      _hover={method.action ? {
                        shadow: "md",
                        transform: "translateY(-2px)",
                      } : {}}
                      onClick={() => method.action && window.open(method.action, "_self")}
                    >
                      <Box
                        as={method.icon}
                        fontSize="2xl"
                        color="brand.500"
                      />
                      <Box>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                          {method.label}
                        </Text>
                        <Text fontWeight="semibold">
                          {method.value}
                        </Text>
                      </Box>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </Stack>

            <ContactForm />
          </Grid>
        </Container>
      </Box>

      {/* Availability Section */}
      <Box py={{ base: 16, md: 20 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="5xl">
          <Box
            bg="gray.50"
            _dark={{ bg: "gray.900" }}
            p={{ base: 8, md: 12 }}
            borderRadius="xl"
            textAlign="center"
          >
            <Stack gap={6}>
              <Heading size={{ base: "lg", md: "xl" }}>
                Office Hours & Availability
              </Heading>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
                textAlign="left"
              >
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Business Hours
                  </Text>
                  <Stack gap={1} fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                    <Text>Monday - Friday: 9:00 AM - 6:00 PM EST</Text>
                    <Text>Saturday: 10:00 AM - 2:00 PM EST</Text>
                    <Text>Sunday: Closed</Text>
                  </Stack>
                </Box>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Response Time
                  </Text>
                  <Stack gap={1} fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                    <Text>Email: Within 24 hours</Text>
                    <Text>Phone: Same business day</Text>
                    <Text>Emergency: Call for immediate support</Text>
                  </Stack>
                </Box>
              </Grid>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box
        py={{ base: 16, md: 20 }}
        bgGradient="linear(to-r, brand.500, accent.500)"
      >
        <Container maxW="4xl">
          <Stack gap={6} textAlign="center" color="white">
            <Heading size={{ base: "xl", md: "2xl" }}>
              Prefer to Schedule a Call?
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
              Book a free 30-minute consultation to discuss your project in detail.
              No commitment required.
            </Text>
            <HStack justify="center" gap={4} pt={4}>
              <CTAButton variant="secondary" size="lg">
                Schedule Call
              </CTAButton>
              <CTAButton href="/lookbook" variant="outline" size="lg">
                View Our Work
              </CTAButton>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
