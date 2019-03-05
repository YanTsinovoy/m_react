import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux';

let mapStateToProps = state => ({token: state.token.token})

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    let p = this.props
    return (
      <div className="todo__list-main">
        <div>
            <input
              className="todo__list-main__input"
              placeholder="Task"
              ref={p.inputElement}
              value={p.currentItem.text}
              onChange={p.handleInput}
            />
            <button onClick={p.addItem}> Add Task </button>
        </div>
      </div>
    )
  }
}

class TodoItems extends Component {
  createTasks = item => {
      return (
        <li className="todo__list__item" key={item.key} onClick={() => this.props.deleteItem(item.key)}>
          {item.text}
        </li>
      )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="todo__list">{listItems}</ul>
  }
}




class ToDo extends Component {
  state = {
      items: [],
      currentItem: {text:'', key:''},
  }

  componentDidMount(){
    let token = this.props.token
    axios({
        url: "https://test-app-a-level.herokuapp.com/category",
        method: "GET",
        headers: {
          "Authorization": "Bearer " + token
        }
      })
        .then(res => this.addStartItems(res.data.category))
        .catch(err => console.error(err))
  }

  addStartItems = data => {
    this.setState({items: data.map(el => ({text: el.name, key: el._id}))})
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
      const newItem = this.state.currentItem
      if (newItem.text !== '') {
        const items = [...this.state.items, newItem]
        this.setState({
          items: items,
          currentItem: { text: '', key: '' },
        })
      }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
  }

  inputElement = React.createRef()

  render() {
    return (
      <div className="todo">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

ToDo = connect(mapStateToProps, {})(ToDo)

export default ToDo
