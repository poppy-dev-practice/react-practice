import React, { Component } from 'react'

export class RenderHoover extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
  
      handchager=()=>{
          this.setState({
              count:this.state.count + 1
          })
      }

  render() {
    return (
        <div>hover {this.state.count}
         <br></br>
        <button onMouseOver ={this.handchager}>hover</button>
        
      </div>
      
    )
  }
}

export default RenderHoover