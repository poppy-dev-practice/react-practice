import React, { Component } from 'react'

export default class Fh1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         topic:"react"
      }
    }
userchange=(event)=>{
    this.setState({
        username:event.target.value
    })
}
selectChange=(event)=>{
    this.setState({
       topic:event.target.value
    })
}
sumbitmaaru=(event)=>{
    alert(`${this.state.username} like ${this.state.topic}`)
    event.preventDefault()
}


  render() {
    return (
     <form onSubmit={this.sumbitmaaru}>
        <div>
         <div>
        <label>user name </label>
        <input type={"text"} value={this.state.username} onChange={this.userchange}></input>
      </div>
      <div>
      <br></br>
      <label>select </label>
      <select value={this.state.topic} onChange={this.selectChange}>
        <option value={"react"}>react</option>
        <option value={"angular"}>angular</option>
        <option value={"vue"}>vue</option>
       </select>
       <br></br>
       <br></br>
       <button type="submit">submit</button>
    </div>
     </div>
     </form>
    )
  }
}
