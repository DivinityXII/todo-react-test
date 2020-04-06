import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'

class MainLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const { children } = this.props
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Nav />
        {children}
      </div>
    )
  }
}
export default MainLayout