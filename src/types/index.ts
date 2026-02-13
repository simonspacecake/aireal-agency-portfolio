// Project Card Types
export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  results?: {
    metric: string
    value: string
  }[]
  imageUrl?: string
}

// Skill Types
export interface Skill {
  name: string
  level: number // 0-100
  yearsOfExperience?: number
  description?: string
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  serviceInterest: string
  budgetRange?: string
  message: string
}

// AI Workflow Types
export interface WorkflowStep {
  id: number
  title: string
  description: string
  type: 'human' | 'ai' | 'collaborative'
  icon?: string
}
