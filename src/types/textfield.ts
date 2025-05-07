import type { InputHTMLAttributes } from 'react'
import type { FieldValues, Path, Control } from 'react-hook-form'

export interface TextFieldProps<T extends FieldValues = FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  textarea?: boolean
  className?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
}
