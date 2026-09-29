interface Todo {
  id: string
  text: string
  isCompleted: boolean
}

import { useState, useEffect } from 'react'
import './App.css'

const INITIAL_TODOS = [] as Todo[]

export default function App(){

  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all') 
  const [todos, setTodos] = useState<Todo[]>(() => { 
    const saved = localStorage.getItem('todos');
    if (!saved){
      return INITIAL_TODOS
    }
    return JSON.parse(saved) as Todo[]
})

  const addTodo = () => {
    if (input.trim()){
      setTodos([...todos, 
        {
          text: input,
          id: crypto.randomUUID(),
          isCompleted: false
        }
      ])
      setInput('')
    }
  }

  const removeTodo = (id: string) => {
    setTodos(
      todos.filter(todo => 
        todo.id !== id  
      )
    )
  }

  const todoCompletion = (id: string) => {
    setTodos(
      todos.map(todo => (
        todo.id === id 
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      ))
    )
  }

  const todosToShow = todos.filter(todo => {
    if (filter === 'completed'){
      return todo.isCompleted === true
    } else
    if (filter === 'active'){
      return todo.isCompleted === false  
    } else
      return todo
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTodo()}>Добавить</button>
      <ul>
        {todosToShow.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => todoCompletion(todo.id)} />
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>✖</button>
          </li>
        ))}
      </ul>
      
      <button onClick={() => setFilter('all')}>Все</button>
      <button onClick={() => setFilter('active')}>Активные</button>
      <button onClick={() => setFilter('completed')}>Завершенные</button>
      <p>Осталось выполнить: {todos.filter(todo => todo.isCompleted === false).length}</p>
    </div>
  )
}