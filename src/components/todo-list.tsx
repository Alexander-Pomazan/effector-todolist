import React from 'react'
import { TodoItem } from 'src/components'
import { ITodo } from 'src/types'

interface TodoListProps {
  todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  )
}
