import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Login = () => {
  const { userName, setUserName } = useGlobalContext()

  useEffect(() => {
    localStorage.setItem('userName', JSON.stringify(userName))
  }, [userName])

  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <form onChange={handleChange}>
      <input type="text" />
      <Link to="/main-todo" type="submit">
        go to todos page
      </Link>
    </form>
  )
}

export default Login
