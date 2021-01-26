let body = document.querySelector("body")
let canvas = ""
let ctx = ""
let virusX = 30
let virusY = 175
let maskX = 950
let maskY = 50
let lockdownX = 950
let lockdownY = 150
let partyX = 950
let partyY = 350
let score = 0
let intervalID = 0

// Changing section-tag
function deleteSectionOne() {
  let sectionOne = document.querySelector("section")
  body.removeChild(sectionOne)
}

// Creating Game HTML
function mainToGame(){
  let sectionTwo = document.createElement("section")
  sectionTwo.innerHTML = `
        <canvas width="1000px" height="500px">
        </canvas>
        <h1 id="score">SCORE</h1>
        <script src="main.js"></script>
        `
  body.appendChild(sectionTwo)
}

// When Start-button is clicked
function clickStart() {
  let startBtn = document.querySelector("button")
  startBtn.addEventListener("click", function () {
    deleteSectionOne()
    mainToGame()
    canvas = document.querySelector('canvas')
    ctx = canvas.getContext('2d')
    canvas.style.border = '2px solid black'
    setInterval(function(){
      requestAnimationFrame(draw)
    }, 3)
  })
}
clickStart()

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

let mask = document.createElement('img')
mask.src = '/images/Mask.png'

let virus = document.createElement('img')
virus.src = '/images/Covid.png'

let lockdown = document.createElement('img')
lockdown.src ='/images/lockdown.jpeg'

let party = document.createElement('img')
party.src = '/images/party.jpeg'

let elements = [{x: canvas.width, y: Math.random()}]

function draw(){

        // always clear canvas
        ctx.clearRect(0, 0, 1000, 500)

        //draw elements
        ctx.drawImage(virus, virusX, virusY, 40, 40) 

        rightToLeftMask()
        rightToLeftLockdown()
        rightToLeftParty()

        collision()
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 38 || event.key == "ArrowUp") {
     isUpArrow = true;
     isDownArrow = false;
     virusY -= 15
  }
  else if (event.keyCode == 40 || event.key == "ArrowDown") {
     isUpArrow = false;
     isDownArrow = true;
     virusY += 15
  }
})

document.addEventListener('keyup', (event) => {
 isRightArrow = false;
 isLeftArrow = false;
})

let maskArr = [{x: 1000, y: 200}]

function rightToLeftMask(){
  for (let i = 0; i < maskArr.length; i++){
    ctx.drawImage(mask, maskArr[i].x, maskArr[i].y, 80, 40)
    maskArr[i].x--
    if(maskArr[i].x === 100) {
      maskArr.push({
        x: 1000,
        y: Math.floor(Math.random() * canvas.height)
      })
    }
  }
}

let lockdownArr = [{x: 1000, y: 500}]

function rightToLeftLockdown(){
  for (let i = 0; i < lockdownArr.length; i++){
    ctx.drawImage(lockdown, lockdownArr[i].x, lockdownArr[i].y, 100, 40)
    lockdownArr[i].x--
    if(lockdownArr[i].x === 100) {
      lockdownArr.push({
        x: 1000,
        y: Math.floor(Math.random() * canvas.height)
      })
    }
  }
}

let partyArr = [{x: 1000, y: 500}]

function rightToLeftParty(){
  for (let i = 0; i < partyArr.length; i++){
    ctx.drawImage(party, partyArr[i].x, partyArr[i].y, 100, 40)
    partyArr[i].x--
    if(partyArr[i].x === 100) {
      partyArr.push({
        x: 1000,
        y: Math.floor(Math.random() * canvas.height)
      })
    }
  }
}

// Virus stops at Top/Bottom
// function virusLimit(){
//   if (virusY === 0){

//   }
//   if (virusY >= canvas.height){
    
//   }
// }

function collision () {
    if (virusX < maskX + 80 && virusX + 40 > maskX && virusY < maskY + 40 && virusY + 40 > maskY) {
      score -= 10
      console.log("collision with virus")
    } 

    if (virusX < partyY + 100 && virusX + 40 > partyX && virusY < partyY + 40 && virusY + 40 > partyY) {
      score += 10
      console.log("collision")
    }

    if (virusX < lockdownY + 100 && virusX + 40 > lockdownX && virusY < lockdownY + 40 && virusY + 40 > lockdownY) {
      clearInterval(intervalID)
      deleteSectionTwo()
      gameToEnd()
  }
}

// Tracking score
// function score(){
//       ctx.font = '20px Verdana'
//       ctx.fontcolor = 'green'
//       ctx.fillText('Score: ' + score, 10, canvas.height - 50)
// }

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// Changing section-tag
function deleteSectionTwo () {
  let sectionTwo = document.querySelector("section")
  body.removeChild(sectionTwo)
 }

 // Creating end-screen HTML
 function gameToEnd(){
  let sectionTwo = document.createElement("section")
  sectionTwo.innerHTML = `
      <div id="gameover">
        <h1>GAME OVER</h1>
        <h3>You hit Lockdown and cant spread anymore!</h3>
      </div>
      <div id="score">
        <h1>DISPLAY SCORE</h1>
      </div>
      <div>
        <div class="restartbtndiv">
          <button type="button" id="restartbtn">RESTART</button>
        </div>
      </div>
      <script src="main.js"></script>
        `
  body.appendChild(sectionTwo)
}












// function collision(){
    
//   // with Mask
//   if (maskX > canvas.length) {
//       // change this to a -ve num
//       incrementX = -incrementX
//   }  
  
//   //check with Lockdown
//   if (circleY + circleRadius > canvas.height) {
//       // check if ball stays within paddle boundries
//       if (circleX > paddleX && circleX < paddleX + paddleWidth) {
//           incrementY = -incrementY
//           score++
//       }
//       else {
//           clearInterval(intervalID)
//           gameOver()
//       }
      
//   }
//   // with Party
//   if (circleX - circleRadius < 0) {
//       // keep this to a +ve num
//       incrementX = 5
//   }

//   //check bottom & top 
//   if (circleY - circleRadius < 0) {
//       incrementY = 5
//   }
// }









// function draw(){
//   ctx.drawImage(backImg, 0, 0,)

//   for (let i = 0; i < pipes.length; i++){
//       ctx.drawImage(northPipe, pipes[i].x, pipes[i].y)
//       ctx.drawImage(southPipe, pipes[i].x, pipes[i].y + constant)
//       pipes[i].x--

//       if (pipes[i].x == 50) {
//           pipes.push({
//               x: canvas.width - 60,
//               y: - Math.floor(Math.random() * northPipe.height)
//           })
//       } 

      
//       // pipe collision
//       // if (birdY !== pipes[i].x && pipes[i].y) {
//       //     clearInterval(intervalID)
//       //     alert('game over')
//       // } 
      
//   }

//   ctx.drawImage(birdImg, 50, birdY)
//   ctx.drawImage(fgImg, 0, canvas.height - fgImg.height)

//   ctx.font = '20px Verdana'
//   ctx.fillText('Score:' + score, 20, canvas.height - 50)

//   birdY += birdIncrement
// }

// document.addEventListener('mousedown', () => {
//   birdIncrement = -5
// })

// document.addEventListener('mouseup', () => {
//   birdIncrement = 2
// })
















//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------




// When collision with "Lockdown" happens, move to end-screen (ideas)

// function collision() {
//   let collision = virus.x && virus.y === lockdown.x && lockdown.y
//   collision.addEventListener("click", function () {
//     deleteSectionTwo()
//     gameToEnd()
//   })
// }
// collision()


// Keeping track of score (ideas)
//function score(){
//   if (virus.x && virus.y === party.x && party.y) {
//     score += 10
//   } else if (virus.x && virus.y === mask.x && mask.y) {
//     score -= 10
//   }
// }

// Random placement and x-movement of elements Mask, Lockdown, Party
// function movementElements (){
//
// }

// Moving Viurs along y
// function moveVirus(){
//
// }

// Updating the score





//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// END SCREEN
// function resetButton() {
// - deletes section
// - attaches html index
// }

// function updateScore () {
// - grabs last updated function score 
//}