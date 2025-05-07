import type { CardProps } from '../../types/card'

const Card = ({ children, className = '', shadow = false }: CardProps) => {
  const base = 'rounded-md bg-white dark:bg-neutral-900 p-6'
  const shadowCls = shadow ? 'shadow-md' : ''
  return <div className={`${base} ${shadowCls} ${className}`}>{children}</div>
}

export default Card