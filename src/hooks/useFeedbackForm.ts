import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

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
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const form = useForm<FeedbackFormSchema>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullName: '',
      email: '',
      feedback: '',
    },
    mode: 'onBlur'
  })

  const handleFormSubmit = (onValid: (data: FeedbackFormSchema) => void) => {
    return form.handleSubmit(
      (data) => {
        try {
          onValid(data)
          setFormStatus('success')
        } catch (error) {
          console.error('Form submission error:', error)
          setFormStatus('error')
        }
      },
      () => {
        console.error('Validation failed')
        setFormStatus('error')
      }
    )
  }

  const resetStatus = () => {
    setFormStatus('idle')
  }

  const onSubmit = (data: FeedbackFormSchema) => {
    console.log('Form submitted:', data)
  }

  return {
    ...form,
    handleSubmit: handleFormSubmit,
    onSubmit,
    formStatus,
    resetStatus
  }
}
