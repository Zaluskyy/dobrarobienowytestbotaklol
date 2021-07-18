import React, { useRef, useEffect } from 'react';


import './App.css';

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
      c.arc(this.x, this.y, 50, 0, Math.PI*2, false)
      c.stroke()
    }
  }

  const magic = new Magic(200, 200)

  useEffect(() => {
   animate()
  });

  const animate = ()=>{
    const c = canvas.current.getContext("2d");
    requestRef.current = requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    magic.draw()
  }

  return (
    <div className="App">
      <canvas ref={canvas} width={500} height={500} style={{ marginTop:"150px", backgroundColor: "white"}} ></canvas>
    </div>
  );
}

export default App;
