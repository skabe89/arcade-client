// import React, { useEffect, useRef }from 'react'
// import './Matrix.css'

// export default function Matrix() {
  
 
//   const optionsDiv = document.getElementsByClassName("optionsWindow")
//   const optionsArea = document.getElementsByClassName("optionsUl")
//   const scoreBoard = document.getElementsByClassName("scoreBoard")
//   const theOneGif = document.getElementsByClassName("theOne")
//   const codeHallGif = document.getElementsByClassName("codeHall")
//   const player = useRef()//document.getElementsByClassName("player")
//   const bullet = document.getElementsByClassName("bullet")
//   const scoreDiv = document.getElementsByClassName("score")
  
//   const nameInput = () => document.getElementsByClassName("name")
//   const scoreInput = () => document.getElementsByClassName("score")
//   const startWindow = () => document.getElementsByClassName("startWindow")
//   const startText = () => document.getElementsByClassName("startText")
  
//   let userName = ""
//   let stringToRender = ""
//   let gunCock = new Audio('https://www.soundjay.com/mechanical/sounds/gun-cocking-01.mp3')
//   let gunShot = new Audio('https://www.soundjay.com/mechanical/sounds/gun-gunshot-01.mp3')
//   let shellDrop = new Audio('https://www.soundjay.com/mechanical/sounds/empty-bullet-shell-fall-02.mp3')
  
//   let score = 0
//   let theOneUsed = false
//   let bulletSpeeds = [2, 3, 4, 5, 6, 7, 8]
  
//   class Game {
    
//     static all = []
    
//     constructor(attr){
//       this.id = attr.id
//       this.score = attr.score
//       this.user = attr.user
//     }
    
//     save(){
//       Game.all.push(this)
//     }
    
//     static create(attr){
//       let game = new Game(attr)
//       game.save()
//       return game
//     }
    
//     static clearScores(){
//       scoreBoard.innerHTML = ""
//     }
    
//     static renderScores(){
//       Game.sortedGames().forEach(game => Game.putScoresOnDom(game))
//     }
    
//     static sortedGames(){
//       let sortedGames = [...Game.all].sort((a, b) => b.score - a.score)
//       return sortedGames
//     }
    
//     static updateScores(){
//       Game.clearScores()
//       Game.renderScores()
//     }
    
//     static renderGameScore(){
//       scoreDiv.innerText = score
//     }
    
//     static deleteButton(){
//       let form = document.getElementsByClassName("form")
//       form.innerHTML = ""
//     }
    
//     static putScoresOnDom(score){
//       let div = document.createElement("div")
//       let li = document.createElement("li")
//       let p = document.createElement("h3")
//       let btn = document.createElement("button")
      
//       if(score.score === 1){
//         p.innerText = `${score.user.name}: ${score.score} pt`
//       }
//       else{
//         p.innerText = `${score.user.name}: ${score.score} pts`
//       }
      
//       btn.id = score.id
      
//       li.append(p, btn)
//       div.append(li)
//       scoreBoard.append(div)
//     }
//   }
  
  
//   /** Window displays */
//   // useEffect(() => {
//     //   effect
//     //   return () => {
//       //     cleanup
//       //   }
//       // }, [input])
//       window.addEventListener('DOMContentLoaded', (e) => {
//         Game.renderGameScore();
//         renderForm();
//         player.style.height = "80px"
//         addButtonFunctionality();
//       })
      
//       let renderForm = () => {
//         let form = `<h2>Enter Your Name</h2>
//         <form className="form">
//         <div class="input-field">
//         <input type="text" name="name" id="name"/>
//         </div>
//         <br>
//         <input type="submit" value="Start Game" />
//         </form>
//         `
//         optionsDiv.innerHTML = form
//       }
      
//       let renderControlMenu = () => {
//         let form = `    
//         <h2><u>Controls</u></h2>
//         <h4>Press the UP arrow to Jump</h4>
//         <h4>Press the Down arrow to Duck</h4>
//         <h4>Press the spacebar to have the agent fire a shot</h4>
//         <h4>Get the Highscore to become the ONE!</h4>`
        
//         optionsDiv.innerHTML = form
//       }
      
//       let addButtonFunctionality = () => {
//         let button = document.getElementsByClassName("form").children[2]
        
//         button.addEventListener("click", function(e) {
//           userName = nameInput().value
          
//           if(userName === ""){
//             alert("Please enter a name")
//           }
//           else {
//             changePlayerColorIfEnoch()
//             let openingLine = `Wake up, ${userName}...`
//             Game.deleteButton()
//             renderControlMenu()
//             e.preventDefault()
//             typeName(openingLine)
//             setTimeout(() => {
//               console.log("starting")
//               startGame();
//               gunCock.play()
//             }, 6000)
//           }
//         })
//       }
      
      
//       /**  game mechanics */
      
      
//       let jump = () =>{
//         player.style.bottom = "40px"
//         setTimeout(() => player.style.bottom = "0px", 200)
//       }
      
//       let duck = () =>{
//         player.style.left = "40px"
//         player.style.height = "20px"
//         player.style.width = "80px"
//         setTimeout(() => {
//           player.style.height = "80px"
//           player.style.width = "20px"
//           player.style.left = "120px"
//         }
//         , 300)
//       }
      
//       let highBulletMove = () => {
//         let shotMove = bullet.style.left.replace("px", "")
//         let left = parseInt(shotMove, 10)
        
//         if (left > 0) {
//           bullet.style.left = `${left - 5}px`
//         }
//         else {
//           clearInterval(this.intervalId)
//           bullet.style.left = "685px"
//           score ++
//           checkScore()
//           Game.renderGameScore()
//         }
//       }
      
//       let lowBulletMove = () => {
//         let shotMove = bullet.style.left.replace("px", "")
//         let left = parseInt(shotMove, 10)
//         let shotDown = bullet.style.bottom.replace("px", "")
//         let bottom = parseInt(shotDown, 10)
        
//         if (left > 0) {
//           bullet.style.left = `${left - 5}px`
//           if(left % 15 === 0){
//             bullet.style.bottom = `${bottom - 1}px`
//           }
//         }
//         else {
//           clearInterval(this.intervalId)
//           bullet.style.left = "685px"
//           bullet.style.bottom = "58px"
//           score ++
//           checkScore()
//           Game.renderGameScore()
//         }
//       }
      
//       let checkScore = () => {
//         if(score > Game.sortedGames()[0]?.score && theOneUsed === false) {
//           console.log('%cChecking Score', "color: red")
//           renderBackground()
//           gifOn();
//           setTimeout(() => gifOff(), 1800)
//           setTimeout(() => codeHallOn(), 1800)
//           setTimeout(() => codeHallOff(), 3000)
//           theOneUsed = true
//         }
//       }
      
//       let checkHit = () => {
//         let bulletLeft = bullet.style.left
//         let bottom = player.style.bottom
//         let height = player.style.height
//         // console.log(bulletLeft)
//         // console.log(bullet.style.bottom)
//         if (bullet.style.bottom === "58px") {
//           // console.log("the height is right")
//           if(height === "80px" && bulletLeft === "140px", height === "80px" && bulletLeft === "135px", height === "80px" && bulletLeft === "130px") {
//             alert("Game Over, high hit")
//             theOneUsed = false
//             resetBackground()
//             Game.submitScore()
//             clearInterval(this.intervalId)
//             bullet.style.left = "685px"
//             score = 0
//             Game.renderGameScore()
//           }
//         }
//         else if(bullet.style.bottom !== "58px") {
//           //lowshot
//           if(bottom === "0px" && bulletLeft === "140px", bottom === "0px" && bulletLeft === "135px", bottom === "0px" && bulletLeft === "130px") {
//             // gameOver()
//             alert("Game Over, low hit")
//             theOneUsed = false
//             resetBackground()
//             clearInterval(this.intervalId)
//             Game.submitScore()
//             bullet.style.left = "685px"
//             bullet.style.bottom = "58px"
//             score = 0
//             Game.renderGameScore()
//           } 
//         }
//       }
//       //left hits 140, 135, 130, 125, 120, 115
//       let shot = function() {
//         let randomNum = Math.floor(Math.random() * 2)
//         let shotOptions = [lowBulletMove, highBulletMove]
//         let randomShot = Math.floor(Math.random() * 7)
//         gunShot.play()
        
//         this.intervalId = setInterval(function() {
//           shotOptions[randomNum]()
//           checkHit()
//         }
//         , bulletSpeeds[randomShot]);
//       }
      
//       let startGame = () => {
//         startWindow().style.display = "none";
//         addGameEvents()
//       }
      
//       // function gameOver(){
//   //   startWindow().style.display = "block"
//   // } 
  
//   let addGameEvents = () => {
//     document.addEventListener("keydown", function(e) {
//       if(e.key === "ArrowUp"){
//         jump()
//       }
//       if(e.key === "ArrowDown"){
//         duck()
//       }
//       if(e.keyCode === 32){
//         shot()
//       }
//       if(e.key === "ArrowRight"){
//         lowBulletMove()
//       }
//     })
//   }
  
  
//   /** Animations and Sounds */
  
  
//   let gifOn = () => {
//     startText().innerHTML = ""
//     startWindow().style.display = "block"
//     theOneGif.style.display = "block"
//   }
  
//   let gifOff = () => {
//     startWindow().style.display = "none"
//     theOneGif.style.display = "none";
//   }
  
//   let codeHallOn = () => {
//     startWindow().style.display = "block"
//     codeHallGif.style.display = "block"
//   }
  
//   let codeHallOff = () => {
//     startWindow().style.display = "none"
//     codeHallGif.style.display = "none"
//   }
  
//   let renderStartText = () => {
//     startText().style.left = "30%"
//     startText().innerText = stringToRender + "_"
//   }
  
//   let typeName = (string) => {
//     for(let i = 0; i < string.length; i++){
//       setTimeout(() => {
//         stringToRender = stringToRender.concat(string[i]);
//         renderStartText()
//       }, i * 270)
//     }
//   }
  
//   let renderBackground = () => {
//     document.body.style.backgroundImage = `url("https://media1.tenor.com/images/84bb08e499749a5729fde83700d1351e/tenor.gif?itemid=9435293")`
//   }
  
//   let resetBackground = () => {
//     document.body.style.backgroundImage = ""
//   }
  
//   let changePlayerColorIfEnoch = () => {
//     if(userName.toLowerCase() === "enoch") {
//       player.style.background = '#283593'
//     }
//   }
  

  
  
//   return (
//     <div>
      
//       <div className="optionsWindow"></div>

//       <div className="gameWindow">
//         <div className="score" class="center-align"></div>
//         <div className="player" style={{bottom: "0px", left: "120px"}}></div>
//         <div className="agent" style={{bottom: "0px", left: "720px"}}></div>
//         <div className="agentArm" style={{bottom: "50px", left: "695px"}}></div>
//         <div className="bullet" style={{bottom: "58px", left: "685px"}}></div>
//         <div className="gun" style={{bottom: "55px", left: "685px"}}></div>
//         <div className="startWindow"><h1 id="startText">MATRIX 1972</h1><img src="https://media1.tenor.com/images/c598358b3917d2475eb425e7ab63a07d/tenor.gif?itemid=14744864" alt="" id="theOne" /><img src="https://media3.giphy.com/media/v7WM6sLcnGIc8/giphy.gif?cid=ecf05e47bakg86d35ub9ckl9mqtdinl2fp8220mnsu1zxg3a&rid=giphy.gif" alt="" id="codeHall" /></div>
//       </div>

//       <div className="scoreWindow">
//         <h2><u>High Scores</u></h2>
//         <ol className="scoreBoard"></ol>
//       </div>

//     </div>
//   )
// }
