import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          username:'',
          comment:'',
          topic:'react'
      }
    }


  Maaruusername = (event)=>{
    this.setState({
        username: event.target.value
    })

 }


 Maarutextarea = (event)=>{
    this.setState({
        comment: event.target.value
    })

 }

 selectpannu = (event) =>{
    this.setState({
        topic:event.target.value
    })
 }

submitda = (event)=>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
}


  render() {
    return (
      <form onSubmit={this.submitda}>
        <div>
        <label>username </label>
        <input type="text" value = {this.state.username} onChange={this.Maaruusername}></input>
        </div>
        <br></br>
        <div>
        <label>comment </label>
        <textarea type="text" value = {this.state.comment} onChange={this.Maarutextarea}></textarea>
        </div>
        <br></br>
        <div>
        <label >topic </label>
        <select  value = {this.state.topic} onChange = {this.selectpannu}>
            <option value = {'react'}>react</option>
            <option value = {'angular'}>angular</option>
            <option value = {'vue'}>vue</option>
        </select>
        </div>
        <br></br>
        <button type='submit'>submit</button>
      </form>
    )
  }
}
