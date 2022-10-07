import React, { Component } from 'react'

export class Rendercounter extends Component {
    
  render() {
    return (
     <div>
             <div>counter {this.props.count} times</div>
             
             <button onClick={this.props.handchager}>counter</button>
     </div>
    )
  }
}

export default Rendercounter