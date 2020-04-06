import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import axios from 'axios'

import { initMe } from '../store/me/action'

import TodoCreate from '../components/todo.create'
import TodoUpdate from '../components/todo.update'
import TodoDelete from '../components/todo.delete'

class IndexContainer extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
      todoList: [],
      selectedTodo: {}
		}
		this.getTodoList = this.getTodoList.bind(this)
  }
  
  componentDidMount() {
    this.getTodoList()
  }

  async getTodoList() {
    let response = await axios.get('https://candidate.neversitup.com/todo/todos', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    this.setState({
      todoList: response.data
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"/>
          <div className="col-md-4" style={{border: '1px solid #000'}}>
            <TodoCreate callBackFn={this.getTodoList}/>
            <div className="card">
              <ul className="list-group list-group-flush">
                {this.state.todoList.map(todo => {
                  return (
                    <li className="list-group-item" key={`todo_${todo._id}`}>
                      <div className="row col-md-12">
                        <div className="col-md-8">
                          <h4>{todo.title}</h4><br/>
                          <p>{todo.description}</p>
                        </div>
                        <div className="col-md-4">
                          <button type="button" onClick={() => this.setState({selectedTodo: todo})} class="btn btn-warning" data-toggle="modal" data-target="#updateTodo" style={{float: 'right'}}>Update</button>
                          <button type="button" onClick={() => this.setState({selectedTodo: todo})} class="btn btn-danger" data-toggle="modal" data-target="#deleteTodo" style={{float: 'right'}}>Delete</button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <TodoUpdate callBackFn={this.getTodoList} todoUpdate={this.state.selectedTodo}/>
            <TodoDelete callBackFn={this.getTodoList} todoDelete={this.state.selectedTodo}/>
          </div>
          <div className="col-md-4"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  meState: state.MeReducer.meState
})

const mapDispatchToProps = (dispatch) => ({
  initMe: value => {
    dispatch(initMe(value))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer)