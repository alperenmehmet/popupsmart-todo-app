import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useGlobalContext } from '../context'

const Login = () => {
  const { userName, setUserName } = useGlobalContext()

  useEffect(() => {
    localStorage.setItem('userName', JSON.stringify(userName))
  }, [userName])

  const handleChange = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
  }

  return (
    <form onChange={handleChange} className="login-page">
      <input type="text" placeholder="Please enter a username" />
      <Link to="/main-todo" type="submit" className="login-button">
        go to todos page
      </Link>
    </form>
  )
}

export default Login
