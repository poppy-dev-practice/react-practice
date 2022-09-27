import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";




const WithCounter = (WrappedComponent,incrementnumber)=>{

    class WithCounter  extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          handchager=()=>{
              this.setState({
                  count:this.state.count + incrementnumber
              })
          }

         
        render(){

            return <WrappedComponent count={this.state.count} handchager={this.handchager} name = "pavithran" {...this.props}></WrappedComponent>
        }

    }
    return WithCounter
}

export default WithCounter