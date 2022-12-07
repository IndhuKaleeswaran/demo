import React, { Component } from 'react'
import Encomp from './EnComponent'
class ClickCounter extends Component {
  render() {
    const{name,count,inc}=this.props
    return (
      <div>
      {name}
      <button onClick={inc}>Clickme {count}</button>
      </div>
    )
  }
}
export default Encomp(ClickCounter);