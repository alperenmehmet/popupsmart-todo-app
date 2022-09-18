import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState('')
  const [todos, setTodos] = useState([])
  const [singleTodo, setSingleTodo] = useState('')
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!singleTodo) return
    else if (singleTodo && isEditing && singleTodo.length > 2) {
      // EDIT PROCESS
      fetch(`https://631e3ac99f946df7dc3ff8ff.mockapi.io/todos/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: singleTodo,
          isCompleted: true
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setIsEditing(false)
      setEditId(null)
      setSingleTodo('')
      fetchTodos()
    } else if (singleTodo.length > 2) {
      // ADD PROCESS

      fetch('https://631e3ac99f946df7dc3ff8ff.mockapi.io/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: singleTodo,
          isCompleted: true
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })

      fetchTodos()
      setSingleTodo('')
    } else {
      setIsSubmit(true)
      setFormErrors(validate(singleTodo))
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    fetch(`https://631e3ac99f946df7dc3ff8ff.mockapi.io/todos/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res))
    fetchTodos()
  }

  const editTodo = (id) => {
    const editingTodo = todos.find((todo) => todo.id === id)
    setSingleTodo(editingTodo.content)
    setEditId(id)
    setIsEditing(true)
    console.log('editing got true')
  }

  const fetchTodos = async () => {
    const response = await fetch(
      'https://631e3ac99f946df7dc3ff8ff.mockapi.io/todos'
    )
    const result = await response.json()
    setTodos(result)
  }

  const validate = () => {
    const errors = {}
    if (singleTodo.length < 3) {
      errors.singleTodo = 'Todo cannot be less than 3 character!!!'
    }
    return errors
  }

  useEffect(() => {
    fetchTodos()
  }, [todos])

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        todos,
        singleTodo,
        setSingleTodo,
        deleteTodo,
        editTodo,
        handleSubmit,
        isEditing,
        formErrors,
        setFormErrors,
        validate,
        isSubmit,
        setIsSubmit
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
