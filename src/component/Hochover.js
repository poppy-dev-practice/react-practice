import React, { Component } from 'react'
import WithCounter from './Pothuvairukarathu'

export class Hochover extends Component {


  render() {
    return (
      <div>
        count {this.props.count} times
        <br></br>
        <button onMouseOver={this.props.handchager}>{this.props.name} increment</button>
        </div>
    )
  }
}

export default WithCounter(Hochover) 