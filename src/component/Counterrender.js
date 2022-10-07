import React, { Component } from 'react'

export class Counterrender extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
  
    handchager = () => {
          this.setState(prevestate => {
            return {count: prevestate.count + 1}
          })
    }
              



  render() {
    return (
      <div>{this.props.render(this.state.count,this.handchager)}</div>
    )
  }
}

export default Counterrender