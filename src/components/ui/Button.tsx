import type { ButtonProps } from '../../types/button'

const Button = ({
  children,
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-3 text-base font-medium transition-colors duration-200 ease-in-out bg-red-700 hover:bg-red-800 text-white ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button