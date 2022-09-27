import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";




const WithCounter = (WrappedComponent)=>{

    class WithCounter  extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          handchager=()=>{
              this.setState({
                  count:this.state.count + 1
              })
          }


        render(){
            return <WrappedComponent count={this.state.count} handchager={this.handchager} name = "pavithran"></WrappedComponent>
        }

    }
    return WithCounter
}

export default WithCounter