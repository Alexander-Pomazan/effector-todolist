import React, { useCallback } from 'react'
import { SubmitButton, TodoInput } from 'src/components'
import { ITodo } from 'src/types'

interface TodoFormProps {
  onSubmit: (todoTitle: ITodo['title']) => void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      onSubmit('new todo')
    },
    [onSubmit]
  )

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput value="new todo" onChange={console.log} />
      <SubmitButton title="submit"></SubmitButton>
    </form>
  )
}
