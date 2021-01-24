let body = document.querySelector("body")
//console.log(body)

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
  //console.log(body)
  //console.log(sectionTwo)
}

// When Start-button is clicked
function clickStart() {
  let startBtn = document.querySelector("button")
  startBtn.addEventListener("click", function () {
    deleteSectionOne()
    mainToGame()
  })
}
clickStart()

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// Creating the canvas (not working)

let canvas = document.querySelector('canvas')
console.log(canvas)
// let ctx = canvas.getContext('2d')
// canvas.style.border = '2px solid black'
// let intervalID = 0

// let mask = document.createElement('img')
// mask = '/images/Mask.png'

// let virus = document.createElement('img')
// virus = '/images/Covid.png'

// let lockdown = document.createElement('img')
// lockdown ='/images/lockdown.jpeg'

// let party = document.createElement('img')
// party = '/images/party.jpeg'

// let bgimg = document.createElement('img')
// bgimg = '/images/citybackground.jpeg'

// function draw(){
//         ctx.drawImage(bgimg, 0, 0)
//         ctx.drawImage(virus, 50, 50)
//         ctx.drawImage(mask, 500, 50)
//         ctx.drawImage(lockdown, 500, 150)
//         ctx.drawImage(party, 500, 250)
// }

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// Changing section-tag
function deleteSectionTwo () {
  let sectionTwo = document.querySelector("section")
  body.removeChild(sectionTwo)
  //console.log(body)
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
  //console.log(body)
}


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




//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

