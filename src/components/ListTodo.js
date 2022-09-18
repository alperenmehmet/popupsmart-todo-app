import { useGlobalContext } from '../context'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListTodo = () => {
  const { todos, deleteTodo, editTodo } = useGlobalContext()

  return (
    <div className="todo-container">
      {todos.map((todo) => {
        const { content, id } = todo
        return (
          <li key={id} className="todo">
            <p className="todo-content">{content}</p>
            <div className="action-buttons">
              <button type="type">
                <FaEdit
                  className="edit-button"
                  onClick={() => {
                    editTodo(id)
                  }}
                />
              </button>
              <button type="type">
                <FaTrash
                  className="delete-button"
                  onClick={() => {
                    deleteTodo(id)
                  }}
                />
              </button>
            </div>
          </li>
        )
      })}
    </div>
  )
}

export default ListTodo
