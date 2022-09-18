import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainTodo from '../pages/MainTodo'
import Login from '../pages/Login'
import SharedLayout from '../pages/SharedLayout'

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main-todo" element={<MainTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppWrapper
