import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {Home} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route component={Home} />
      </Switch>
    )
  }
}

export default withRouter(
  connect(
    null,
    null
  )(Routes)
)
