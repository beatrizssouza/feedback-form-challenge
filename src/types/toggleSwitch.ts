import type { HTMLAttributes } from 'react'

export interface ToggleSwitchProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  checked: boolean
  onChange: () => void
  id?: string
}
