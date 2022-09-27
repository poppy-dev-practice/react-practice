import React, { Component } from 'react'
import Childprops from './Childprops'

export class Methodinprops extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
         parentname:"appa"
     }
     this.greethandler=this.greethandler.bind(this)
   }

  //  greethandler(ola){
  //   alert(`hello ${this.state.parentname} ${ola}`)
  //  }

   greethandler(){
      this.setState({
        parentname:"kulandhaivelu"
      })
   }
   


  render() {
    return (
      <div>
        <h1>i love {this.state.parentname}</h1>
        <Childprops greetparent={this.greethandler }></Childprops>
        <button onClick={this.greethandler}>in parent </button>
      </div>
    )
  }
}

export default Methodinprops