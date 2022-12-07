import React, { Component } from 'react'
const Encomp=(Orcomponent)=>{
class EnComponent extends Component
 {
    constructor(props) {
        super(props)
      
        this.state = {count:0}
      }
      inc=()=>{this.setState({count:this.state.count+1})}
  render() 
  {
    return <Orcomponent name="suit" count={this.state.count} inc={this.inc}/>
    
  }
}
return EnComponent
}
export default Encomp