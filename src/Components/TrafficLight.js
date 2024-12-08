import React from 'react'
import "./TrafficLight.css"
import { useState, useEffect } from 'react';
function TrafficLight() {
    
        const [light, setlight] = useState("red"); // Start with red light
      
        useEffect(() => {
          const durations = {
            red: 4000,    // Red light duration in milliseconds
            yellow: 1000, // Yellow light duration in milliseconds
            green: 3000,  // Green light duration in milliseconds
          };
      
          // Switch light function
          const switchLight = () => {
            setlight((prevLight) => {
              if (prevLight === "red") return "yellow";
              if (prevLight === "yellow") return "green";
              if (prevLight === "green") return "red";
            });
          };
      
          const timer = setTimeout(switchLight, durations[light]);
      
          return () => clearTimeout(timer); // Clean up on unmount or light change
        }, [light]); // Dependency on light
  return (
    <div className='traffic-light'>
         <div className={`light red ${light === "red" ? "active" : "" }`}> </div>
         <div className={`light yellow ${light === "yellow" ? "active" : "" }`}> </div>
         <div className={`light green ${light === "green" ? "active" : "" }`}> </div>
    </div>
    
  )
}

export default TrafficLight