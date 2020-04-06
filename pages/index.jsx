import React from 'react'

import MainLayout from '../layout/main/main.layout'
import IndexContainer from '../containers/index.container'

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <MainLayout>
        <IndexContainer />
      </MainLayout>
    )
  }
}

export default Index
