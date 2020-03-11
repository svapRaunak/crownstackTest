import * as React from 'react'
import TodoItem from './todo-item'
import { TodoListInterface } from '../interfaces'

const TodoList = (props: TodoListInterface) => {
  return (
    <div >
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoComplete={props.handleTodoComplete}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
