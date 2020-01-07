import React, { useCallback } from 'react'
import { SubmitButton, TodoInput } from 'src/components'
import { ITodo } from 'src/types'

import { createStore, createEvent } from 'effector'
import { useStore } from 'effector-react'

export const todoInputChange = createEvent<string>('todoInputChange')
const todoFormStore = createStore('').on(todoInputChange, (_, value) => value)
const useTodoFormStore = () => useStore(todoFormStore)

interface TodoFormProps {
  onSubmit: (todoTitle: ITodo['title']) => void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const todoValue = useTodoFormStore()

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      onSubmit(todoValue)
      todoInputChange('')
    },
    [onSubmit, todoValue]
  )

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput value={todoValue} onChange={todoInputChange} />
      <SubmitButton title="submit" />
    </form>
  )
}
