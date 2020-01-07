import React, { useCallback } from 'react'
import { SubmitButton, TodoInput } from 'src/components'
import { ITodo } from 'src/types'

import { createStore, createEvent } from 'effector'
import { useStore } from 'effector-react'

export const todoChange = createEvent<string>('todoChange')
const todoFormStore = createStore('').on(todoChange, (_, value) => value)
const useTodoFormStore = () => useStore(todoFormStore)

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

  const todoValue = useTodoFormStore()

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput value={todoValue} onChange={todoChange} />
      <SubmitButton title="submit" />
    </form>
  )
}
