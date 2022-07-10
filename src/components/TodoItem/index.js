import './index.css'

const TodoItem = props => {
  const {todoItem, uniqueNo, deleteDestination} = props
  const {title} = todoItem

  const onClickDelete = () => {
    deleteDestination(uniqueNo)
  }

  return (
    <li className="each-item">
      <p className="title">{title}</p>

      <button
        type="submit"
        className="button"
        onClick={onClickDelete}
        uniqueNo={uniqueNo}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
