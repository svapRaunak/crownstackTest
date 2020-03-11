import * as React from 'react'
import shortid from 'shortid'
import { TodoInterface, TodoFormInterface } from '../interfaces'

const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [formState, setFormState] = React.useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value)
  }

  function handleInputSubmit() {
    const newTodo: TodoInterface = {
      id: shortid.generate(),
      text: formState,
      isCompleted: false
    }
    props.handleTodoCreate(newTodo)
    if (inputRef && inputRef.current) {
      inputRef.current.value = ''
    }
  }
  
  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder='Enter your todo here'
        onChange={event => handleInputChange(event)}
      />
      <button type="submit" onClick={event => handleInputSubmit()}> Add </button>
    </div>
  )
}

export default TodoForm
