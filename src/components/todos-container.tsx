import React, { useEffect } from 'react'
import { createStore, createEffect, createEvent } from 'effector'
import { useStore } from 'effector-react'
import { TodoList, TodoForm, TodosLayout } from 'src/components'
import { ITodo } from 'src/types'
import { getMockTodos } from 'src/get-mock-todos'

interface ITodosStore {
  loading: boolean
  error: boolean
  todos: ITodo[]
}

const getTodos = createEffect<void, ITodo[]>('getTodos').use(() => {
  return getMockTodos()
})

const createTodo = createEvent<ITodo['title']>('createTodo')

const todosStore = createStore<ITodosStore>({
  loading: false,
  error: false,
  todos: [],
})
  .on(createTodo, (state, value) => {
    const newTodo: ITodo = {
      completed: false,
      id: Math.random(),
      title: value,
    }
    const updatedTodos = [...state.todos, newTodo]

    return {
      ...state,
      todos: updatedTodos,
    }
  })
  .on(getTodos, state => ({
    ...state,
    loading: true,
  }))
  .on(getTodos.fail, state => ({
    ...state,
    error: true,
    loading: false,
  }))
  .on(getTodos.done, (_, { result }) => ({
    loading: false,
    error: false,
    todos: result,
  }))

const useTodosStore = () => useStore(todosStore)

export const TodosContainer = () => {
  const { todos, loading, error } = useTodosStore()

  useEffect(() => void getTodos(), [])

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error!</div>

  return (
    <TodosLayout
      todosFormElement={<TodoForm onSubmit={createTodo} />}
      todosListElement={<TodoList todos={todos} />}
    />
  )
}
