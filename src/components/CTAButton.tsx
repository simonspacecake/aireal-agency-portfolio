'use client'

import { Button } from "@chakra-ui/react"
import Link from "next/link"

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
}: CTAButtonProps) {
  const variantStyles = {
    primary: {
      bgGradient: "linear(to-r, brand.500, accent.500)",
      color: "white",
      _hover: {
        bgGradient: "linear(to-r, brand.600, accent.600)",
        transform: "translateY(-2px)",
        shadow: "lg",
      },
    },
    secondary: {
      bg: "gray.100",
      color: "gray.800",
      _hover: {
        bg: "gray.200",
        transform: "translateY(-2px)",
        shadow: "md",
      },
      _dark: {
        bg: "gray.700",
        color: "white",
        _hover: {
          bg: "gray.600",
        },
      },
    },
    outline: {
      borderWidth: "2px",
      borderColor: "brand.500",
      color: "brand.500",
      bg: "transparent",
      _hover: {
        bg: "brand.50",
        transform: "translateY(-2px)",
        shadow: "md",
      },
      _dark: {
        borderColor: "brand.400",
        color: "brand.400",
        _hover: {
          bg: "brand.900",
        },
      },
    },
  }

  const buttonProps = {
    size,
    fontWeight: "semibold",
    transition: "all 0.2s",
    ...variantStyles[variant],
  }

  if (href) {
    return (
      <Button asChild {...buttonProps}>
        <Link href={href}>{children}</Link>
      </Button>
    )
  }

  return (
    <Button onClick={onClick} {...buttonProps}>
      {children}
    </Button>
  )
}
