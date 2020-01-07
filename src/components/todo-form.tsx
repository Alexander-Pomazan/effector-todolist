import React from 'react'
import { SubmitButton, TodoInput } from 'src/components'
import { ITodo } from 'src/types'

interface TodoFormProps {
  onSubmit: (todoTitle: ITodo['title']) => void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  return (
    <form>
      <TodoInput value="new todo" onChange={console.log} />
      <SubmitButton title="submit"></SubmitButton>
    </form>
  )
}
