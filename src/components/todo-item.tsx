import React, { useMemo } from 'react'

import { ITodo } from 'src/types'

type TodoItemProps = Omit<ITodo, 'id'>

const getRootStyle = (completed: ITodo['completed']): React.CSSProperties => {
  return {
    textDecoration: completed ? 'line-through' : 'none',
  }
}

export const TodoItem: React.FC<TodoItemProps> = ({ title, completed }) => {
  const rootStyles = useMemo(() => getRootStyle(completed), [completed])

  return <li style={rootStyles}>{title}</li>
}
