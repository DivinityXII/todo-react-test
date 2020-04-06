import React from 'react'

import MainLayout from '../layout/main/main.layout'
import TodoContainer from '../containers/todo.container'

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <MainLayout>
        <TodoContainer />
      </MainLayout>
    )
  }
}

export default Index
