import type { FeedbackMessageProps } from '../../types/feedbackMessage'
import { useEffect, useState } from 'react'

const FeedbackMessage = ({
  type,
  title,
  message,
  show,
  className = '',
  ...rest
}: FeedbackMessageProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        if (rest.onHide) {
          rest.onHide()
        }
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [show, rest.onHide])

  if (!show && !isVisible) return null

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-orange-600'
  
  return (
    <div
      className={`fixed bottom-4 right-4 rounded-md p-6 text-white shadow-md ${bgColor} ${className} transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      {...rest}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-white">{message}</p>
    </div>
  )
}

export default FeedbackMessage
