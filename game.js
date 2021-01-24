/* <section class="game">
        <canvas width="700px" height="350px"></canvas>
        <script src="game.js"></script>
</section> */

// console.log(body)

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
// let intervalID = 0

console.log(body)

let mask = document.createElement('img')
mask = '/images/Mask.png'

let virus = document.createElement('img')
virus = '/images/Covid.png'

let lockdown = document.createElement('img')
lockdown ='/images/lockdown.jpeg'

let party = document.createElement('img')
party = '/images/party.jpeg'

let bgimg = document.createElement('img')
bgimg = '/images/citybackground.jpeg'

function draw(){
        ctx.drawImage(bgimg, 0, 0)
        ctx.drawImage(virus, 50, 50)
        ctx.drawImage(mask, 500, 50)
        ctx.drawImage(lockdown, 500, 150)
        ctx.drawImage(party, 500, 250)
}






// intervalID = setInterval(() => {
//         requestAnimationFrame(draw)
// }, 100)

// setInterval(() => {
//         ctx.clearReact(0, 0, canvas.width, canvas.height)
// })




// function deleteSectionTwo () {

// }


// function gameToEnd () {

// }



// function collison(){
//         // if collision--> eventListener jumps to game over screen
// }




//function gameToEnd () {}

// sectionTwo.classList.remove("section2")
// let sectionThree = document.createElement("section3")
// sectionTwo.classList.add("game")
// console.log(sectionThree)



