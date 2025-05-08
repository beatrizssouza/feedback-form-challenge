import type { HTMLAttributes } from 'react'

export type MessageType = 'success' | 'error'

export interface FeedbackMessageProps extends HTMLAttributes<HTMLDivElement> {
  type: MessageType
  title: string
  message: string
  show: boolean
}
