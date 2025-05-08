import { useFeedbackForm } from '../../hooks/useFeedbackForm'
import Card from '../../components/ui/Card'
import TextField from '../../components/ui/TextField'
import Button from '../../components/ui/Button'
import ToggleSwitch from '../../components/ui/ToggleSwitch'
import { useState } from 'react'

export function FeedbackForm() {
  const [isDisabled, setIsDisabled] = useState(false)
  const { control, handleSubmit, onSubmit, reset, clearErrors } = useFeedbackForm()

  const handleToggleDisabled = () => {
    const newDisabled = !isDisabled
    setIsDisabled(newDisabled)
    if (newDisabled) {
      reset()
      clearErrors()
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <ToggleSwitch
        label="Disabled Mode"
        id="toggle-disabled"
        checked={isDisabled}
        onChange={handleToggleDisabled}
        className="self-end"
      />
      <Card>
      <h1 className="text-xl font-bold text-gray-900 mb-1">Share your feedback</h1>
      <p className="text-sm text-gray-500 mb-6">We would love to hear your thoughts.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="fullName" control={control} label="Full Name" className="mb-4" disabled={isDisabled} inputProps={{ placeholder: 'Insert your full name' }} />

        <TextField
          name="email"
          control={control}
          label="Email"
          className="mb-4"
          disabled={isDisabled}
          inputProps={{ type: 'email', placeholder: 'johndoe@sumitomo.com' }}
        />

        <TextField
          name="feedback"
          control={control}
          label="Feedback"
          textarea
          disabled={isDisabled}
          inputProps={{ placeholder: 'The experience was incredible...' }}
          className="mb-6"
        />

        <Button type="submit" fullWidth disabled={isDisabled}>
          Share feedback
        </Button>
      </form>
    </Card>
    </div>
  )
}

export default FeedbackForm
