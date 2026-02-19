'use client'

import { Box, Grid, Stack, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"
import { HiClock, HiCheckCircle, HiChatAlt2, HiShieldCheck, HiMail } from "react-icons/hi"
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
    value: "hello@aireal.agency",
    action: "mailto:hello@aireal.agency",
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
    <Box minH="100vh" background="var(--cli-bg)" color="var(--cli-fg)">
      {/* Hero */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        borderBottom="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" maxW="4xl" mx="auto" textAlign="center">
            <HStack justify="center" gap="var(--space-2)">
              <HiMail size={24} color="var(--cli-primary)" />
              <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-comment)">
                ~/contact/inquiries
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "var(--text-4xl)", md: "var(--text-5xl)" }}
              fontWeight="var(--font-black)"
              lineHeight="var(--leading-tight)"
            >
              <Text as="span" color="var(--cli-primary)">$</Text> send{" "}
              <Text as="span" color="var(--cli-secondary)">--message</Text>
              <span className="cli-cursor-line"></span>
            </Text>

            <Text
              fontSize="var(--text-lg)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
              lineHeight="var(--leading-relaxed)"
            >
              Ready to transform your ideas into reality? Let's discuss your project.
            </Text>
          </Stack>
        </Box>
      </Box>

      {/* Benefits Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box textAlign="center">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-primary)"
                mb="var(--space-2)"
              >
                $ cat benefits.txt
              </Text>
              <Text fontSize="var(--text-2xl)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Why Work With Us
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                We're committed to your success, from first consultation to long-term support
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap="var(--space-6)"
            >
              {benefits.map((benefit) => (
                <Box
                  key={benefit.title}
                  p="var(--space-6)"
                  background="var(--cli-bg)"
                  border="var(--border-width) solid var(--cli-border)"
                  borderRadius="var(--border-radius-lg)"
                  textAlign="center"
                  transition="all var(--transition-base)"
                  _hover={{
                    borderColor: "var(--cli-primary)",
                    transform: "translateY(-2px)",
                  }}
                >
                  <Box
                    as={benefit.icon}
                    fontSize="var(--text-3xl)"
                    color="var(--cli-primary)"
                    mb="var(--space-4)"
                    mx="auto"
                    width="fit-content"
                  />
                  <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                    {benefit.title}
                  </Text>
                  <Text fontSize="var(--text-sm)" color="var(--cli-fgAlt)">
                    {benefit.description}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* Contact Form Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="var(--space-10)" alignItems="start">
            <Stack gap="var(--space-8)">
              <Box>
                <Text
                  fontFamily="var(--font-mono)"
                  fontSize="var(--text-sm)"
                  color="var(--cli-primary)"
                  mb="var(--space-2)"
                >
                  $ ./contact-us.sh
                </Text>
                <Text fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }} fontWeight="var(--font-bold)" mb="var(--space-4)">
                  Get In Touch
                </Text>
                <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                  Fill out the form and we'll get back to you within 24 hours.
                  For urgent inquiries, feel free to email or call us directly.
                </Text>
              </Box>

              <Box>
                <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-4)" color="var(--cli-secondary)">
                  # What Happens Next?
                </Text>
                <Stack gap="var(--space-3)">
                  {[
                    "We'll review your inquiry and project details",
                    "Schedule a free 30-minute discovery call",
                    "Discuss your goals, timeline, and budget",
                    "Provide a detailed proposal and timeline",
                    "Start building your project",
                  ].map((step, index) => (
                    <HStack key={index} align="start" gap="var(--space-3)">
                      <Box
                        minW="28px"
                        h="28px"
                        borderRadius="var(--border-radius-full)"
                        background="var(--cli-primary)"
                        color="var(--cli-bg)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="var(--font-bold)"
                        fontSize="var(--text-sm)"
                        fontFamily="var(--font-mono)"
                      >
                        {index + 1}
                      </Box>
                      <Text color="var(--cli-fgAlt)" fontSize="var(--text-sm)">
                        {step}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-4)" color="var(--cli-secondary)">
                  # Other Ways to Connect
                </Text>
                <Stack gap="var(--space-4)">
                  {contactMethods.map((method) => (
                    <HStack
                      key={method.label}
                      p="var(--space-4)"
                      background="var(--cli-bgAlt)"
                      border="var(--border-width) solid var(--cli-border)"
                      borderRadius="var(--border-radius)"
                      cursor={method.action ? "pointer" : "default"}
                      transition="all var(--transition-base)"
                      _hover={method.action ? {
                        borderColor: "var(--cli-primary)",
                        transform: "translateY(-2px)",
                      } : {}}
                      onClick={() => method.action && window.open(method.action, "_self")}
                    >
                      <Box
                        as={method.icon}
                        fontSize="var(--text-2xl)"
                        color="var(--cli-primary)"
                      />
                      <Box>
                        <Text fontSize="var(--text-sm)" color="var(--cli-comment)" fontFamily="var(--font-mono)">
                          {method.label}
                        </Text>
                        <Text fontWeight="var(--font-semibold)" fontFamily="var(--font-mono)">
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
        </Box>
      </Box>

      {/* Availability Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Box
            className="terminal-window"
            maxW="5xl"
            mx="auto"
          >
            <Box className="terminal-header">
              <span className="terminal-button close"></span>
              <span className="terminal-button minimize"></span>
              <span className="terminal-button maximize"></span>
              <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                availability.txt
              </Text>
            </Box>
            <Box className="terminal-body">
              <Stack gap="var(--space-6)">
                <Text fontSize="var(--text-xl)" fontWeight="var(--font-bold)" textAlign="center" color="var(--cli-primary)">
                  # Office Hours & Availability
                </Text>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap="var(--space-6)"
                >
                  <Box>
                    <Text fontWeight="var(--font-semibold)" mb="var(--space-2)" color="var(--cli-secondary)">
                      ## Business Hours
                    </Text>
                    <Stack gap="var(--space-1)" fontSize="var(--text-sm)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                      <Text>Monday - Friday: 9:00 AM - 6:00 PM EST</Text>
                      <Text>Saturday: 10:00 AM - 2:00 PM EST</Text>
                      <Text>Sunday: Closed</Text>
                    </Stack>
                  </Box>
                  <Box>
                    <Text fontWeight="var(--font-semibold)" mb="var(--space-2)" color="var(--cli-secondary)">
                      ## Response Time
                    </Text>
                    <Stack gap="var(--space-1)" fontSize="var(--text-sm)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                      <Text>Email: Within 24 hours</Text>
                      <Text>Phone: Same business day</Text>
                      <Text>Emergency: Call for immediate support</Text>
                    </Stack>
                  </Box>
                </Grid>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Final CTA */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        borderTop="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
              fontWeight="var(--font-bold)"
            >
              Prefer to Schedule a Call?
            </Text>
            <Text fontSize="var(--text-lg)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              Book a free 30-minute consultation to discuss your project in detail.
              No commitment required.
            </Text>
            <HStack justify="center" gap="var(--space-4)" flexWrap="wrap">
              <Box className="btn btn-primary">
                $ schedule --call
              </Box>
              <Link href="/lookbook" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --view-work
                </Box>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
