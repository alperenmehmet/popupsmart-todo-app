import { useEffect } from 'react'
import { useGlobalContext } from '../context'

const MainTodo = () => {
  const { setUserName, userName } = useGlobalContext()
  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem('userName'))
    if (userName) {
      setUserName(userName)
    }
  }, [])
  return <div>hello {userName}</div>
}

export default MainTodo
