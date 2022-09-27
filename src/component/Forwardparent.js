import React, { Component } from 'react'
import Forwardchild from './Forwardchild'

export class Forwardparent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        }
  focusinput=()=>{
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <Forwardchild ref={this.inputRef}></Forwardchild>
        <button onClick={this.focusinput}>button</button>
      </div>
    )
  }
}

export default Forwardparent