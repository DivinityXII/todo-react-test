import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import axios from 'axios'

class IndexContainer extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this)
  }
  
  login = async () => {
    let me = await axios.post('https://candidate.neversitup.com/todo/users/auth', {
      username: "Oht",
      password: "12345678"
    })
    if (me) {
      localStorage.setItem('token', me.data.token)
      Router.push('/todo')
    }
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"/>
          <div className="col-md-4" style={{border: '1px solid #000', textAlign: 'center'}}>
            <form>
              <div className="form-group row">
                <label htmlhtmlFor="staticUsername" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                  <input type="text" onChange={(e) => this.setState({username: e.target.value})} className="form-control-plaintext" id="staticUsername" value={this.state.username}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlhtmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" onChange={(e) => this.setState({password: e.target.value})} className="form-control" id="inputPassword" value={this.state.password}/>
                </div>
              </div>
            </form>
            <button type="button" onClick={this.login} className="btn btn-primary btn-lg">Login</button>
          </div>
          <div className="col-md-4"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer)