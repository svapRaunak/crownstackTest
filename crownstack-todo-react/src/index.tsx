import * as React from 'react'
import { render } from 'react-dom'
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import { TodoInterface } from './interfaces'
import './styles/styles.css'
import axios from 'axios';


const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
  const [tasksRemaining, setTasksRemaining] = React.useState(0);
  const [tasksTotal, setTasksTotal] = React.useState(0);
  React.useEffect(() => { setTasksRemaining(todos.filter(todos => !todos.isCompleted).length) });
  React.useEffect(() => { setTasksTotal(todos.length) });
  React.useEffect(() => {
     axios.get("http://localhost:3005/api/getTodos")
  .then(res => 
    setTodos( res.data.result))
  .catch(err => { }) 
},[]);


  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    axios.post("http://localhost:3005/api/addTodos", {todo:todo});
    setTodos(newTodosState)
  }

  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState)
  }

  return (
    <div className="todo-list-app">
      <h2 >Total Todos Remaining : {tasksRemaining} out of {tasksTotal}</h2>
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      <TodoList
        todos={todos}
        handleTodoComplete={handleTodoComplete}
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)
