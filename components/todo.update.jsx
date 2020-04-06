import React from 'react'
import axios from 'axios'

class TodoCreate extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
      title: this.props.todoUpdate.title || '',
      description: this.props.todoUpdate.description || '',
      targetID: this.props.todoUpdate._id || null
    }
    this.callBackFn = this.props.callBackFn || undefined
    this.onUpdateTodo = this.onUpdateTodo.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.todoUpdate.title,
      description: nextProps.todoUpdate.description,
      targetID: nextProps.todoUpdate._id,
    })
  }
  
  async onUpdateTodo() {
    let response = await axios.put(`https://candidate.neversitup.com/todo/todos/${this.state.targetID}`, {
      title: this.state.title,
      description: this.state.description
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    if (response.status == 200) {
      this.callBackFn()
      $('#updateTodo').modal('toggle')
    }
  }
  
  render() {
    return (
      <>

        <div className="modal fade" id="updateTodo" tabIndex="-1" role="dialog" aria-labelledby="updateTodoLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="updateTodoLabel">Update Todo</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input onChange={(e) => this.setState({title: e.target.value})} value={this.state.title} type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea onChange={(e) => this.setState({description: e.target.value})} value={this.state.description} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.onUpdateTodo}>Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default TodoCreate