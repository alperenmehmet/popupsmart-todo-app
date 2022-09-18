import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { getLocalStorage } from '../hooks/getLocalStorage'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const [toggle, setToggle] = useState()
  const [theme, setTheme] = useState(getLocalStorage())
  const { setUserName, userName } = useGlobalContext()

  const handleTheme = () => {
    setToggle(!toggle)
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
    const userName = JSON.parse(localStorage.getItem('userName'))
    if (userName) {
      setUserName(userName)
    }
  }, [theme])

  return (
    <div className="navbar section-center">
      <ul className="navbar-links">
        <li>
          <Link href="/main-todo" className="nav-link">
            Hi! {userName}
          </Link>
        </li>
        <li>
          <i onClick={handleTheme}>
            {toggle ? (
              <FaSun className="sun-icon" />
            ) : (
              <FaMoon className="moon-icon" />
            )}
          </i>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
