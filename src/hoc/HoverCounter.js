import React, { Component } from 'react'
import Encomp from './EnComponent'
class HoverCounter extends Component {

  render() {
    const{name,count,inc}=this.props
    return (
      <div>
    {name}
      <h1 onMouseEnter={inc}>HoverMe {count}</h1>
      </div>
    )
  }
}
export default Encomp(HoverCounter)
