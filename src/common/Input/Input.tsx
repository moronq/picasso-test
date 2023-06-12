import React from 'react'

import { SendIcon } from '../../static/icons'

import { useInput } from './hooks/useInput'

interface InputProps extends ReactTagProps<'textarea'> {
  callback: (arg: string) => void
}

export const Input: React.FC<InputProps> = ({ callback, ...props }) => {
  const { value, onChange, onSubmit } = useInput({ callback })

  return (
    <div className='w-full h-full border rounded-xl flex'>
      <textarea
        {...props}
        className='w-full p-3 h-full rounded-xl resize-none focus:outline-none'
        value={value}
        onChange={onChange}
      />
      <div
        onClick={onSubmit}
        aria-hidden
        className='h-full w-12 flex items-center justify-center hover:bg-green-100 cursor-pointer hover:opacity-50'
      >
        <SendIcon width={24} height={24} />
      </div>
    </div>
  )
}
