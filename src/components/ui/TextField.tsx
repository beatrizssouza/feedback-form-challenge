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
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className={`mb-4 ${className}`}>
          <label
            className="mb-1 block text-sm font-semibold text-gray-700"
            htmlFor={name}
          >
            {label}
          </label>
          {textarea ? (
            <textarea
              id={name}
              className={`block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-900 placeholder-gray-400 min-h-[100px] ${fieldState.error ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : ''}`}
              {...field}
              {...inputProps}
            />
          ) : (
            <input
              id={name}
              className={`block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-900 placeholder-gray-400 ${fieldState.error ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : ''}`}
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