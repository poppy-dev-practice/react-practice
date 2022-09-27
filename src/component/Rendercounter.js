import React, { Component } from 'react'

export class Rendercounter extends Component {
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
     <div>
             <div>counter {this.state.count} times</div>
             
             <button onClick={this.handchager}>counter</button>
     </div>
    )
  }
}

export default Rendercounter