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
              className={`block w-full p-3 border text-sm bg-white text-gray-900 placeholder-gray-400 min-h-[100px] rounded-md focus:outline-none focus:ring-2 ${fieldState.error ? 'border-orange-500 focus:border-orange-500 focus:ring-orange-500' : 'border-gray-300 focus:ring-[#0F172A] focus:border-[#0F172A]'}`}
              {...field}
              {...inputProps}
            />
          ) : (
            <input
              id={name}
              className={`block w-full p-3 border text-sm bg-white text-gray-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 ${fieldState.error ? 'border-orange-500 focus:border-orange-500 focus:ring-orange-500' : 'border-gray-300 focus:ring-[#0F172A] focus:border-[#0F172A]'}`}
              {...field}
              {...inputProps}
            />
          )}
          {fieldState.error && (
            <p className="mt-1 text-sm text-orange-500">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  )
}

export default TextField