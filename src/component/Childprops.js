import React from 'react'

// function Childprops(props) {
//     const{greetparent}=props
//   return (
//     <div>
//         <button onClick={()=>greetparent("pavithran")}>greetparent</button>
//     </div>
//   )
// }
function Childprops(props) {
  
return (
  <div>
      <button onClick={props.greetparent}>greetparent</button>
  </div>
)
}
export default Childprops