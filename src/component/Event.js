import React from 'react'

function Event() {
    function clickbutton() {
        alert("i m event")
    }
  return (
    <div>
        <button onClick={clickbutton}>duba</button>
    </div>
  )
}

export default Event