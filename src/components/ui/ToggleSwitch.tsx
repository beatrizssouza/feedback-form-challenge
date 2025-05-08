import type { ToggleSwitchProps } from '../../types/toggleSwitch'

const ToggleSwitch = ({
  label,
  checked,
  onChange,
  id = 'toggle',
  className = '',
  ...rest
}: ToggleSwitchProps) => {
  return (
    <div
      className={`flex items-center bg-white rounded-md p-2 shadow-sm border border-gray-200 ${className}`}
      {...rest}
    >
      <label htmlFor={id} className="mr-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative inline-block w-12 align-middle select-none" onClick={onChange} role="switch" aria-checked={checked}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className="block h-6 bg-gray-200 rounded-full w-12"></div>
        <div
          className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full transition-transform duration-200 ease-in-out ${checked ? 'translate-x-6 bg-blue-600' : 'bg-white border border-gray-300'}`}
        ></div>
      </div>
    </div>
  )
}

export default ToggleSwitch
