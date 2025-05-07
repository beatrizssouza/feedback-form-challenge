import { useForm } from 'react-hook-form'
import Card from '../../components/ui/Card'
import TextField from '../../components/ui/TextField'
import Button from '../../components/ui/Button'
import type { FeedbackFormData } from '../../types/feedback'

export function FeedbackForm() {
  const { control, handleSubmit } = useForm<FeedbackFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      feedback: '',
    },
  })

  const onSubmit = (data: FeedbackFormData) => {
    console.log('Form submitted:', data)
  }

  return (
    <Card>
      <h1 className="text-xl font-bold text-gray-900 mb-1">Share your feedback</h1>
      <p className="text-sm text-gray-500 mb-6">We would love to hear your thoughts.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="fullName" control={control} label="Full Name" className="mb-4" />

        <TextField
          name="email"
          control={control}
          label="Email"
          className="mb-4"
          inputProps={{ type: 'email', placeholder: 'johndoe@sumitomo.com' }}
        />

        <TextField
          name="feedback"
          control={control}
          label="Feedback"
          textarea
          inputProps={{ placeholder: 'The experience was incredible...' }}
          className="mb-6"
        />

        <Button type="submit" fullWidth>
          Share feedback
        </Button>
      </form>
    </Card>
  )
}

export default FeedbackForm
