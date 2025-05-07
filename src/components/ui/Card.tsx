import type { CardProps } from '../../types/card'

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-8 max-w-md mx-auto border font-sans ${className}`}
    >
      {children}
    </div>
  )
}

export default Card