import React, { useState } from 'react'

interface UseInputProps {
  callback: (arg: string) => void
}

export const useInput = ({ callback }: UseInputProps) => {
  const [value, setValue] = useState('')

  const onSubmit = () => {
    callback(value)
    setValue('')
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return { value, onChange, onSubmit }
}
