import React, { Component } from 'react'
import Refclasscompnentchild from './Refclasscompnentchild'

export class Parentclascomponentref extends Component {
    constructor(props) {
      super(props)
      this.componentRef=React.createRef()
    
    }


    handlerchange=()=>{
        this.componentRef.current.focusinput()
    }
  render() {
    return (
      <div>
        <Refclasscompnentchild ref={this.componentRef}></Refclasscompnentchild>
        <button onClick={this.handlerchange}> parent button </button>
      </div>
    )
  }
}

export default Parentclascomponentref