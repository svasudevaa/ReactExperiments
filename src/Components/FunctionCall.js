import React from 'react'

function FunctionCall() {
    function HandleClick(){
        console.log("button clicked");
    }
  return (
    <>
    <button onClick={HandleClick}>Click me</button>
    </>
  )
}

export default FunctionCall