import React, { Component } from 'react'
import Updatedcomponent from './Pothuvairukarathu'

export class Hochover extends Component {


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
        count {this.state.count} times
        <br></br>
        <button onMouseOver={this.handchager}>increment</button>
        </div>
    )
  }
}

export default Hochover