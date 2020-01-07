import React from 'react'

interface TodosLayoutProps {
  todosFormElement: React.ReactNode
  todosListElement: React.ReactNode
}

export const TodosLayout: React.FC<TodosLayoutProps> = ({
  todosFormElement,
  todosListElement,
}) => (
  <div>
    {todosFormElement}
    {todosListElement}
  </div>
)
