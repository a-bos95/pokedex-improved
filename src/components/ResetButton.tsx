interface ResetButtonProps<T extends HTMLElement> {
  onClick?: (event: React.MouseEvent<T>) => void;
  className?: string;
}

import { ResetIcon } from './Icons'

export default function ResetButton({ onClick, className, ...props }: ResetButtonProps<HTMLButtonElement>) {
  return (
    <button 
        className={className}
        {...props}
        onClick={onClick}
        aria-label="Reset filters"
    >
      <ResetIcon className="w-5 h-5 text-white" />
    </button>
  )
}
