'use client'

import { useState } from "react"
import { Box, Stack, Input, Textarea, Button, Text } from "@chakra-ui/react"
import {
  NativeSelectRoot,
  NativeSelectField,
} from "@chakra-ui/react"
import type { ContactFormData } from "@/types"

interface FormFieldProps {
  label: string
  required?: boolean
  children: React.ReactNode
}

function FormField({ label, required, children }: FormFieldProps) {
  return (
    <Stack gap={2}>
      <Text fontWeight="medium" fontSize="sm">
        {label}
        {required && <Text as="span" color="red.500"> *</Text>}
      </Text>
      {children}
    </Stack>
  )
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    serviceInterest: "",
    budgetRange: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, you would send this to your backend
    console.log("Form submitted:", formData)

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        serviceInterest: "",
        budgetRange: "",
        message: "",
      })
      setSubmitStatus("idle")
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="white"
      _dark={{ bg: "gray.800" }}
      p={8}
      borderRadius="lg"
      shadow="lg"
    >
      <Stack gap={6}>
        <FormField label="Name" required>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </FormField>

        <FormField label="Email" required>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
          />
        </FormField>

        <FormField label="Company">
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
          />
        </FormField>

        <FormField label="Service Interest" required>
          <NativeSelectRoot>
            <NativeSelectField
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              placeholder="Select a service"
            >
              <option value="">Select a service</option>
              <option value="ai-ml">AI/ML Development</option>
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile App</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </NativeSelectField>
          </NativeSelectRoot>
        </FormField>

        <FormField label="Budget Range">
          <NativeSelectRoot>
            <NativeSelectField
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              placeholder="Select budget range"
            >
              <option value="">Select budget range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="over-100k">Over $100,000</option>
            </NativeSelectField>
          </NativeSelectRoot>
        </FormField>

        <FormField label="Message" required>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={6}
            required
          />
        </FormField>

        <Button
          type="submit"
          size="lg"
          bgGradient="linear(to-r, brand.500, accent.500)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, brand.600, accent.600)",
          }}
          loading={isSubmitting}
        >
          Send Inquiry
        </Button>

        {submitStatus === "success" && (
          <Text color="green.500" fontWeight="semibold" textAlign="center">
            Thank you! We'll respond within 24 hours.
          </Text>
        )}

        {submitStatus === "error" && (
          <Text color="red.500" fontWeight="semibold" textAlign="center">
            Something went wrong. Please try again.
          </Text>
        )}

        <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }} textAlign="center">
          We'll respond within 24 hours
        </Text>
      </Stack>
    </Box>
  )
}
