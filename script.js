/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var grid = document.getElementById("grid");
// Append the text to <li>
for( var i=1; i <= 9; i++){ //make your grid of divs with proper ids/ classes
  grid.innerHTML+=`<div class="square" id="${i}"></div>`;
  //grid.appendChild(node); //can't make multiple elements w/ one id huh. 
}

const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time')

let score = document.querySelector('#score')
let hiscore= document.querySelector('#hiscore')
let result = 0
let hitPosition = 0

let currentTime = timeLeft.textContent


function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')
  
  hitPosition = randomPosition.id

}

square.forEach( id => { 
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition) {
      result += 1
      score.textContent = result
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}

moveMole() //kicks off mvmt every sec

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  
  if(currentTime === 0) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
    if (result > hiscore.textContent)
      hiscore.textContent = result
    score.textContent = 0 // reset score
    result = 0
    timeLeft.textContent = 15 // reset time??
    currentTime = timeLeft.textContent
    timerId = setInterval(countDown, 1000)
  }
}

let timerId = setInterval(countDown, 1000)

