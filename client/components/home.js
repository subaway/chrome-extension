import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    return <button className="start">Render App</button>
  }
}

export default connect(
  null,
  null
)(Home)
