import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            
             {(username)=>{
             return <div>i m pavithran i ask to god {username}</div>
              }}

        </UserConsumer>
      </div>
    )
  }
}

export default ComponentF