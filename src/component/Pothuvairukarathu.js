import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
const Updatedcomponent = (OriginalComponent)=>{

    class NewComponent extends React.Component{
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
            return <OriginalComponent count={this.state.count} handchager={this.handchager} name = "pavithran"></OriginalComponent>
        }

    }
    return NewComponent
}

export default Updatedcomponent