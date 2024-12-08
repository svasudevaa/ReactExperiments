import React from 'react'
import { useEffect , useState } from 'react'
function RealTimeUpdate() {
   const [time,setTime] = useState(new Date())
    // const [timing,setTiming] = setState()
    setInterval(() => {
        setTime(new Date())
    }, 1000);
  return (
    <div>
       <h1>{time.getHours() % 12 || 12}:{time.getMinutes().toString().padStart(2,"0")}:{time.getSeconds().toString().padStart(2,"0")}{time.getHours() > 12 ? "PM" : "AM"}</h1>
    </div>
  )
}

export default RealTimeUpdate