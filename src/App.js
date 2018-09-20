import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Login from './route/Login'
import Layout from './route/Layout'

class App extends Component {
  render () {
    return (
      <Layout />
    )
  }
}

export default App;
