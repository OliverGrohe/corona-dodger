//changing section tag
let body = document.querySelector("body")

function deleteSectionOne() {
  let sectionOne = document.querySelector("section")
  body.removeChild(sectionOne)
}

function mainToGame(){
  let sectionTwo = document.createElement("section")
  sectionTwo.innerHTML = `
        <canvas width="1000px" height="500px">
        </canvas>
        `
  //sectionTwo.classList.add(".section")
  body.appendChild(sectionTwo)
  console.log(sectionTwo)
  console.log(body)
}


function clickStart() {
  let startBtn = document.querySelector("button")
  startBtn.addEventListener("click", function () {
    deleteSectionOne()
    mainToGame()
  })
}
clickStart()








document.addEventListener("click", function() {
    
});