import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainTodo from '../pages/MainTodo'
import Login from '../pages/Login'

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main-todo" element={<MainTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppWrapper
