import React, { Component } from 'react'

export class Fivecount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handChanglercount = ()=>{
        this.setState((prevstate)=>({
            count:prevstate.count+1
        }))
        console.log(this.state.count)
    }

  handChangler5count() {
        this.handChanglercount()
    
    } 
    
  render() {
    return (
      <div>
        <div>increment {this.state.count}</div>
        <button onClick={()=>this.handChangler5count()}>five times increnment</button>
      </div>
    )
  }
}

export default Fivecount