import {Component} from 'react'
import TodoItem from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {TodosList: initialTodosList}

  deleteDestination = uniqueNo => {
    const {TodosList} = this.state
    const filteredList = TodosList.filter(eachTodo => eachTodo.id !== uniqueNo)
    this.setState({TodosList: filteredList})

    console.log(TodosList)
  }

  render() {
    const {TodosList} = this.state
    return (
      <div className="app-container">
        <div className="todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-list">
            {TodosList.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                key={eachItem.id}
                uniqueNo={eachItem.id}
                deleteDestination={this.deleteDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
