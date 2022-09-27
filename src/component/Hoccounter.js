import React, { Component } from 'react'
import Updatedcomponent from './Pothuvairukarathu'

export class Hoccounter extends Component {
    

  render() {
    return (
      <div>
        count {this.props.count} times
        <br></br>
        <button onClick={this.props.handchager}>{this.props.name} increment</button>
        </div>
    )
  }
}

export default  Updatedcomponent(Hoccounter)