import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,name:"Indhu"
      }
    }
    //using a method and calling it
    //inc=()=>{
      //  this.setState({count:this.state.count+1})
    //}
    //in place of onClick use onClick={this.inc}
  render() {
    return (
      <div>
      <h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>
      ClickMe {this.state.count}
      </button>
      </h1>
      </div>
    )
  }
}
