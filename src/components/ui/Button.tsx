import type { ButtonProps, Variant } from '../../types/button'
import clsx from 'clsx'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary hover:bg-red-700 text-white',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
}

const Button = ({
  children,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...rest
}: ButtonProps) => {
  const base = clsx(
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
    variantClasses[variant],
    { 'w-full': fullWidth },
    className,
  )

  return (
    <button
      className={base}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button