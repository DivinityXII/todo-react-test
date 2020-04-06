import React from 'react'
import axios from 'axios'

class TodoCreate extends React.Component {

  constructor(props) {
		super(props)
    this.callBackFn = this.props.callBackFn || undefined
    this.onDeleteTodo = this.onDeleteTodo.bind(this)
  }

  async onDeleteTodo() {
    let response = await axios.delete(`https://candidate.neversitup.com/todo/todos/${this.props.todoDelete._id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    if (response.status == 200) {
      if (this.callBackFn) this.callBackFn()
      $('#deleteTodo').modal('toggle')
    }
  }
  
  render() {
    return (
      <>

        <div class="modal fade" id="deleteTodo" tabindex="-1" role="dialog" aria-labelledby="deleteTodoLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="deleteTodoLabel">Delete {this.props.todoDelete.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                <button type="button" class="btn btn-primary" onClick={this.onDeleteTodo}>Confirm</button>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default TodoCreate