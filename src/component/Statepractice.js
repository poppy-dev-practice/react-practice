
import React, { Component } from 'react'

class Statepractice extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       brand:"suzuki",
       model:"mustag",
       color:"red",
       year:1987,
       count:0
    }
  }
  handChangler = ()=>{
    this.setState({
        brand:"audi",
        model:"A3",
        color:"black",
        year:2022
    })
  }

  handChanglercount = ()=>{
    this.setState({
        count:this.state.count+1
    },()=>{
      console.log(this.state.count);
    })
}

  render() {
    const {brand,model,color,year} = this.state
    return (
      <div>
        <div>
        i bougth new {brand} car with model is {model} with color is {color} which is relesed in {year}
      </div>
      <button onClick={this.handChangler}>change my new car</button>
      <div>
        count {this.state.count} time
      </div>
      <button onClick={this.handChanglercount}>increment aagu</button>
      
      </div>

    )
  }
}

export default Statepractice

