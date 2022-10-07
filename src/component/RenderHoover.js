import React, { Component } from 'react'

export class RenderHoover extends Component {
   

  render() {
    return (
        <div>hover {this.props.count}
         <br></br>
        <button onMouseOver ={this.props.handchager}>hover</button>
        
      </div>
      
    )
  }
}

export default RenderHoover