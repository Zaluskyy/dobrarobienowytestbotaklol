import React, { useRef, useEffect, useState } from 'react';


import './App.css';


const randMinMax = (min, max, floor=false)=>{
  if(!floor){
  return Math.random()*(max-min)+min
  }
  return Math.floor(Math.random()*(max-min+1)+min)
}

const distance = (x1, y1, x2, y2)=>{
  const distanceX = x1 - x2
  const distanceY = y1 - y2
  return Math.sqrt(Math.pow(distanceX, 2)+Math.pow(distanceY, 2))
}

function App() {
  const canvas = useRef(null)
  const requestRef = React.useRef()

  

  class Magic{
    constructor(x, y){
      this.x = x
      this.y = y
    }
    draw(){
      const c = canvas.current.getContext("2d");
      c.beginPath()
      c.arc(this.x, this.y, 50, 0, Math.PI*2, false)
      c.stroke()
    }
  }

  const magic = []

  const init =()=>{
    for(let i = 0; i < 10; i++){
      const x = randMinMax(0+50, canvas.current.width-50)
      const y = randMinMax(0+50, canvas.current.height-50)
      magic.push(new Magic(x, y))
    }
  }

  // const magic = new Magic(200, 200)

  useEffect(() => {
    init()
   animate()
  });

  const animate = ()=>{
    const c = canvas.current.getContext("2d");
    requestRef.current = requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for(let i = 0; i < magic.length; i++){
      magic[i].draw()
    }
    // magic.draw()
  }

  return (
    <div className="App">
      <canvas ref={canvas} width={500} height={500} style={{ marginTop:"150px", backgroundColor: "yellow"}} ></canvas>
    </div>
  );
}

export default App;
