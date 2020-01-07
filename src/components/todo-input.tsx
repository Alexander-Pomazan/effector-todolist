import React, { useCallback } from 'react'

interface TodoInputProps {
  value: string
  onChange: (newValue: string) => void
}

export const TodoInput: React.FC<TodoInputProps> = ({ value, onChange }) => {
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value),
    [onChange]
  )

  return <input type="text" value={value} onChange={handleChange} />
}
