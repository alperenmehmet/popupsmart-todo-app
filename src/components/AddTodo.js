import { useGlobalContext } from '../context'
import { useEffect } from 'react'

const AddTodo = () => {
  const {
    singleTodo,
    setSingleTodo,
    handleSubmit,
    isEditing,
    formErrors,
    setFormErrors,
    validate,
    isSubmit
  } = useGlobalContext()

  useEffect(() => {
    if (Object.keys(formErrors).length < 3 && isSubmit) {
      setFormErrors(validate(singleTodo))
    }
  }, [])

  return (
    <form className="form-container">
      <div>
        <input
          type="text"
          value={singleTodo}
          onChange={(e) => setSingleTodo(e.target.value)}
        />
        <p className="error">
          {!singleTodo.length < 3 ? formErrors.singleTodo : ''}
        </p>
      </div>

      <button type="submit" className="add-todo-btn" onClick={handleSubmit}>
        {isEditing ? 'Edit' : 'Add'}
      </button>
    </form>
  )
}

export default AddTodo
