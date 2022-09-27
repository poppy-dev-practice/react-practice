import React, { Component } from 'react'

export class Refs1 extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      }

      componentDidMount(){
        this.inputRef.current.focus()
      }

      clickhandler = ()=>{
        alert(this.inputRef.current.value)
      }
    

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickhandler}>vartha</button>
      </div>
    )
  }
}

export default Refs1