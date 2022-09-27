import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
  render() {
    return (
      <div>
         pavi says{this.context}
        <ComponentF></ComponentF>
        </div>
    )
  }
}



ComponentE.contextType = UserContext
export default ComponentE