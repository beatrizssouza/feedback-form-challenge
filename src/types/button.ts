import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type Variant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  loading?: boolean
  fullWidth?: boolean
}
