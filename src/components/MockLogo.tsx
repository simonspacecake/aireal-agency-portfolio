import { Box, Text } from "@chakra-ui/react"

interface MockLogoProps {
  size?: "sm" | "md" | "lg"
}

export default function MockLogo({ size = "md" }: MockLogoProps) {
  const sizes = {
    sm: { box: "32px", text: "sm" },
    md: { box: "40px", text: "md" },
    lg: { box: "48px", text: "lg" },
  }

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <svg
        width={sizes[size].box}
        height={sizes[size].box}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="url(#gradient)" />
        <path
          d="M12 28L20 12L28 28H24L20 20L16 28H12Z"
          fill="white"
          fillOpacity="0.95"
        />
        <circle cx="20" cy="10" r="2" fill="white" fillOpacity="0.95" />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0795FF" />
            <stop offset="1" stopColor="#8A27FF" />
          </linearGradient>
        </defs>
      </svg>
      <Text
        fontSize={sizes[size].text}
        fontWeight="bold"
        bgGradient="linear(to-r, brand.500, accent.500)"
        bgClip="text"
      >
        AI Agency
      </Text>
    </Box>
  )
}
