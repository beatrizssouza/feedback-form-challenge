import clsx from 'clsx'
import { Controller, type FieldValues } from 'react-hook-form'
import type { TextFieldProps } from '../../types/textfield'

function TextField<T extends FieldValues>({
  name,
  control,
  label,
  textarea = false,
  className = '',
  inputProps,
}: TextFieldProps<T>) {
  const baseInput =
    'block w-full rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
  const colorNeutral =
    'border border-gray-300 bg-white text-gray-900 placeholder-gray-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100'
  const colorError = 'border-red-600 focus:border-red-600 focus:ring-red-600'

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className={clsx('mb-4', className)}>
          <label className="mb-1 block text-sm font-medium" htmlFor={name}>
            {label}
          </label>
          {textarea ? (
            <textarea
              id={name}
              className={clsx(baseInput, fieldState.error ? colorError : colorNeutral)}
              {...field}
              {...inputProps}
            />
          ) : (
            <input
              id={name}
              className={clsx(baseInput, fieldState.error ? colorError : colorNeutral)}
              {...field}
              {...inputProps}
            />
          )}
          {fieldState.error && (
            <p className="mt-1 text-sm text-red-600">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  )
}

export default TextField