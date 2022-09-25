import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div><h2>i m class {this.props.name}</h2></div>
    )
  }
}
