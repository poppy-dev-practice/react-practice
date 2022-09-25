import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state = {
            message:"getting stucked"
        }
      }
    
      changemessage(){
        this.setState({
            message:"never gave up"
        })
      }
    
      render() {
        return (
            <div>
                <h1>{this.state.message }</h1>
                <button onClick={()=>this.changemessage()}>oombu</button>
            </div>
        )
      }
}
