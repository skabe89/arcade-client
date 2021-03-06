import React, { useEffect, useRef } from 'react'

export default function Bounce(props) {
  const canvasRef = useRef()
  let loopContinue = true
  let timer = props.time
 

useEffect(() => {
 
  const canvas = canvasRef.current
  const ctx = canvas.getContext('2d')
  const animate = window.requestAnimationFrame;
  
  const GAME_HEIGHT = 600;
  const GAME_WIDTH = 810;
  let speedY = 4
  let speedX = 4
  
  let player;
  let grub;
  
  function drawBackground(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  }
  
  function clearFrame(){
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  }
  
  function update(){
    player.update()
  }
  
  function draw(){
    drawBackground()
    player.draw()
    checkPoint()
    if(grub.alive){
      grub.draw()
    }
  }

  
  
  
  
  function checkPoint(){
    if(grub.x > player.x && grub.x < player.x + 20 && grub.y > player.y && grub.y < player.y + 20){
      grub = new Grub()
      speedX ++
      speedY ++
    }
  }
  
  function gameLoop(){
    if(loopContinue === true){
      clearFrame()
      update()
      draw()
      animate(gameLoop)
      checkTime()
      if(timer <= 1){
        loopContinue = false
        props.countDown()
        clearInterval(intervalId)
      }
      
    }
    else if(loopContinue === false){
      return null
    }
  }

  let intervalId = setInterval(() => {
    props.countDown()
    timer --
  }, 1000)

  let checkTime = () => {
    return props.time
  }
  
  function setup(){
    player = new Player();
    grub = new Grub()
    player.controls();
    animate(gameLoop);
  }
  
  
   class Player {
  
    constructor(){
      this.x = (GAME_WIDTH/2) -10
      this.y = (GAME_HEIGHT/2) -10
      this.color = 'red'
      this.direction = {up: true, down: false, left: false, right: false}
      this.canSlap = true
      this.width = 20
      this.height = 20
      this.xspeed = 4
      this.yspeed = 4
  
      this.addMovement = this.addMovement.bind(this)
    }
  
    controls(){
      this.setupMovement()
    }
  
    setupMovement(){
      document.addEventListener('keydown', this.addMovement)
    }
  
    addMovement(e){
      switch(e.keyCode) {
        case 87:
          if(this.y > 0){
            this.yspeed = -`${speedY}`
          }
          // this.yspeed = -4
          this.resetDirections()
          this.direction.up = true
          break;
        case 83:
          this.yspeed = speedY
          this.resetDirections()
          this.direction.down = true
          break
        case 65:
          this.xspeed = -`${speedX}`
          this.resetDirections()
          this.direction.left = true
          break;
        case 68:
          this.xspeed = speedX
          this.resetDirections()
          this.direction.right = true
          break;
        default:
          break;  
      }
    }
  
    bounce(){
      if(this.y <= 0){
        this.yspeed = 4
      }
      else if(this.y >= GAME_HEIGHT - this.height){
        this.yspeed = -4
      }
      else if(this.x <= 0){
        this.xspeed = 4
      }
      else if(this.x >= GAME_WIDTH - this.width){
        this.xspeed = -4
      }
    }
  
    resetDirections(){
      this.direction = {
        up: false,
        downn: false,
        left: false,
        right: false
      }
    }
  
  
    update() {
      this.x += this.xspeed;
      this.y += this.yspeed;
      this.bounce()
    }
  
    
    draw() {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  
   }
  
  
   class Grub {
  
     
     constructor(){
       this.x = Math.floor(Math.random() * GAME_WIDTH) - 10
       this.y = Math.floor(Math.random() * GAME_HEIGHT) - 10
       this.height = 10
       this.width = 10
       this.color = "white"
       this.alive = true
       props.addPoint()
    }
  
    draw(){
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  
  
  
    clear(){
      this.alive = false
    }
  
   }
  setup()
}, [])

useEffect(() => {
  return () => {
    console.log("cleaned up")
    loopContinue = false
    props.countDown()
  }
}, [])






  return (
    
    <div>
      <canvas id="canvas" ref={canvasRef} height="600px" width="810px"></canvas>
    </div>
   
  )
}
