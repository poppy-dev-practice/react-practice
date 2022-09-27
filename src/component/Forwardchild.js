import React from 'react'

const Forwardchild = React.forwardRef( (props,ref)=>{
    return(
        <div>
           <input type="text" ref={ref}></input>
        </div>
    )
})

export default Forwardchild