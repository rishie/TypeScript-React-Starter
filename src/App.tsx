import React, {CSSProperties} from 'react';
import './App.css';
import Canvas from './components/Canvas';

const logo = require('./logo.svg');
function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const draw = (ctx: any, frameCount: number, elapsedTime: any) => {
  // const width = 240, height = 240;
  // ctx.save()
  // ctx.beginPath()
  // ctx.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, Math.PI)
  // ctx.closePath()
  // ctx.fillStyle = 'rgb(255, 0, 0)'
  // ctx.fill()
  // ctx.restore()
  if ((frameCount % 100) !== 0) return;
  // console.log(frameCount);

  const start = 8;
  const height = 24;
  const width = 24;
  const lineWidth = 1;
  const numBoxes = 16;
  const numRows = 16;
  const filledBoxes = [randomInteger(1,numBoxes), randomInteger(1, numBoxes)];
  // const filledBoxes = [3, 6];
  ctx.fillStyle = 'rgb(255,255,255';
  ctx.fillRect(start, start, width*numBoxes+2, height*numRows+2);
  ctx.fillStyle = 'rgb(0,0,255';
  for (let row=0; row<numRows; row++) {
    for (let i=0; i<numBoxes; i++) {
      if (filledBoxes.indexOf(i) !== -1) {
          ctx.fillRect((i*width)+start+2, (row*height)+start+2, width, height);
      }
      ctx.strokeRect((i*width)+start+2, (row*height)+start+2, width, height);
    }
  }
}
const contextType = '2d';
const componentStyle: CSSProperties = {
  // width: '1600px',
  // height: '1280px'
};
function App() {
  // const canvasRef = useCanvas({contextType, draw});

  return (
      // note how we are returning the HTML canvas, not the React Canvas component
      <Canvas contextType={contextType} draw={draw} width={800} height={640} style={componentStyle}/>
      // <canvas ref={canvasRef} width={1000} height={1000} />
    );
}

export default App;

