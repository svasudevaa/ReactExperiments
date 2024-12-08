import React, { useState } from 'react'

function Form() {
const [text,setText] = useState("");
function TextHandler(e){
    setText(e.target.value)
}
let textalt = `You are name is ${text}`;

  return (
    <div>
        <form>
            {/* <textarea  onChange={TextHandler}></textarea> */}
            <label htmlFor='name'>Name</label>
            <input id="name" onChange={TextHandler} type="text" />
            <p>{textalt}</p>
        </form>
    </div>
  )
}

export default Form