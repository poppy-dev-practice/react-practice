import React from 'react'

function Arraylist() {
    let arr = ["pavi","viki","nava","amma","appa"]
    let komali = arr.map((arrs)=><h2>{arrs}</h2>)
  return (
    <div>{komali}</div>
  )
}

export default Arraylist