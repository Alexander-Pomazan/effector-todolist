import React from 'react'

interface SubmitButtonProps {
  title: string
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ title }) => {
  return <button type="submit">{title}</button>
}
