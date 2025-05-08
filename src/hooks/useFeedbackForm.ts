import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { FeedbackFormData } from '../types/feedback'

const feedbackSchema = z.object({
  fullName: z.string()
    .min(4, 'Your full name must contain at least 4 letters.'),
  email: z.string()
    .email('Insert a valid email address.'),
  feedback: z.string()
    .min(4, 'Please write at least 4 words.')
    .refine(value => value.trim().split(/\s+/).length >= 4, {
      message: 'Please write at least 4 words.'
    })
})

export type FeedbackFormSchema = z.infer<typeof feedbackSchema>

export function useFeedbackForm() {
  const form = useForm<FeedbackFormSchema>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullName: '',
      email: '',
      feedback: '',
    },
    mode: 'onBlur'
  })

  const onSubmit = (data: FeedbackFormData) => {
    console.log('Form submitted:', data)
  }

  return {
    ...form,
    onSubmit
  }
}
