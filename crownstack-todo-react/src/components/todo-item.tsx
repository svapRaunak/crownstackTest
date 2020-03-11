import * as React from 'react'
import { TodoItemInterface } from '../interfaces'

const TodoItem = (props: TodoItemInterface) => {
  return (
      <div  onClick={() => props.handleTodoComplete(props.todo.id)}
       style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}>
        {props.todo.text}
      </div>
  )
}
export default TodoItem
