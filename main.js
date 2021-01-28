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
let audio1 = new Audio ("./audio/corona announcement.mp3")
audio1.loop = true


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
    audio1.play()
    intervalID = setInterval(function(){
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
mask.src = './images/Mask.png'

let virus = document.createElement('img')
virus.src = './images/Covid.png'

let lockdown = document.createElement('img')
lockdown.src ='./images/lockdown.jpeg'

let party = document.createElement('img')
party.src = './images/party.jpeg'

let elements = [{x: canvas.width, y: Math.random()}]

function draw(){

        // always clear canvas
        ctx.clearRect(0, 0, 1000, 500)

        //draw elements
        ctx.drawImage(virus, virusX, virusY, 40, 40)
        
        ctx.font = '20px Verdana'
        ctx.fillStyle = 'green'
        ctx.fillText('Score: ' + score, 10, canvas.height - 25)

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
    ctx.drawImage(mask, maskArr[i].x, maskArr[i].y, 100, 40)
    maskArr[i].x--
    if(maskArr[i].x === 800) {
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
    if(lockdownArr[i].x === 775) {
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
    if(partyArr[i].x === 700) {
      partyArr.push({
        x: 1000,
        y: Math.floor(Math.random() * canvas.height)
      })
    }
  }
}

function collision() {
  for (let i = 0; i < maskArr.length; i++){
    if (virusX < maskArr[i].x + 80 && virusX + 40 > maskArr[i].x && virusY < maskArr[i].y + 40 && virusY + 40 > maskArr[i].y) {
      score -= 1
    } 
  }
  for (let i = 0; i < partyArr.length; i++){
    if (virusX < partyArr[i].x + 100 && virusX + 40 > partyArr[i].x && virusY < partyArr[i].y + 40 && virusY + 40 > partyArr[i].y) {
      score += 1
    }
  }
  for (let i = 0; i < lockdownArr.length; i++){
    if (virusX < lockdownArr[i].x + 100 && virusX + 40 > lockdownArr[i].x && virusY < lockdownArr[i].y + 40 && virusY + 40 > lockdownArr[i].y) {
      clearInterval(intervalID)
      deleteSectionTwo()
      addGameoverScreen()
      clickRestart()
      audio1.pause()
      audio1.currentTime = 0
    }
  }
}

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
 function addGameoverScreen(){
  let sectionTwo = document.createElement("section")
  sectionTwo.innerHTML = `
      <div id="gameover">
        <h1>GAME OVER</h1>
        <h3>You hit Lockdown and cant spread anymore!</h3>
      </div>
      <div id="score">
        <h1 id="scoreend">You have ${score} infections!</h1>
      </div>
      <div>
        <div class="restartbtndiv">
          <button type="button" id="restartbtn">RESTART</button>
        </div>
      </div>
      
        `
  body.appendChild(sectionTwo)
}

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

function clickRestart() {
  let restartBtn = document.querySelector("#restartbtn")
    restartBtn.addEventListener("click", function () {

      console.log("click")
      deleteSectionTwo()
      mainToGame()
      resetVar()
      audio1.play()
      intervalID = setInterval(function(){
        requestAnimationFrame(draw)
      }, 3)
    })
}

function deleteSectionThree () {
  let sectionThree = document.querySelector("section")
  body.removeChild(sectionThree)
 }

function resetVar(){
  canvas = document.querySelector('canvas')
  ctx = canvas.getContext('2d')
  virusX = 30
  virusY = 175
  maskX = 950
  maskY = 50
  lockdownX = 950
  lockdownY = 150
  partyX = 950
  partyY = 350
  score = 0
  intervalID = 0
  partyArr = [{x: 1000, y: 500}]
  lockdownArr = [{x: 1000, y: 500}]
  maskArr = [{x: 1000, y: 200}]
}