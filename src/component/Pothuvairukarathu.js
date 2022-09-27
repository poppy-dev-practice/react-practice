import React from "react";

const Updatedcomponent = (OriginalComponent)=>{  
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name="pavithran"></OriginalComponent>
        }






    }
    return NewComponent
}

export default Updatedcomponent