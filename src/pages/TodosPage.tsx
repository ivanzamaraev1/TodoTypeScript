import React, {useState, useEffect} from 'react'
import { TodoForm } from '../compoments/TodoForm'
import { TodoList } from '../compoments/TodoList'
import { ITodo } from '../interfaces'


export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodos = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }
  
  const toggleComplited = (id: number) => {
    setTodos(prev => 
      prev.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const deleteTodo = (id: number) => {
    const conf = window.confirm(`Are sure you want to delete this?`)
    if (conf) {
          setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

    return (
        <React.Fragment>
            <div className="container">
                <TodoForm onAdd={addTodos}/>
            </div>
            <TodoList 
            todos={todos} 
            onRemove={deleteTodo} 
            onToggle={toggleComplited}/>
        </React.Fragment>
    )
}
