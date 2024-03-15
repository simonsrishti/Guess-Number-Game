const board = document.querySelector('.board');
const btn = document.getElementById('submitBtn');
const preGuess = document.querySelector('.preGuess');
const lowHigh = document.querySelector('.lowHighMessage')
const remainingGuess = document.querySelector('.remainingGuess')
const result = document.getElementById('result')
const p =document.createElement('BUTTON')

let guessAttemp = 0

const randomNum = Math.floor(Math.random()*100)
let playGame = true

if(playGame){
btn.addEventListener('click', e => {
  e.preventDefault();
  const userInput = document.getElementById('userInput').value
  let guess = parseInt(userInput)
  vaildation(guess)})}

 const vaildation =  guess => {
  userInput.value = '';
  if(guess < 1 || guess > 100){
  alert('Please enter Number Between 1 to 100 Range')}
  else if(isNaN(guess)){
  alert('Please Enter a Number not String')}
  else if(guess === randomNum){
  result.innerHTML = `Conngratulation You Got The Number 😎 👊. Your Secret Number was: ${randomNum}`
  displayMessage('Game Over')
  
  endgame()}


  else{ if(guessAttemp < 4 ){
  incrementAttempt(guess)
  remainingGuess.innerHTML = guessAttemp
  checkGuess(guess)
  displayMessage(message)}

      
  else{ 
  checkGuess(guess)
  displayMessage(`Sorry Game Over. Better Luck Next Time 🤦🥵 Secret Number was: ${randomNum}`)
  remainingGuess.innerHTML = 'finished Chances 0'
  endgame()}}}

function checkGuess(guess) {
if(guess < randomNum){
  displayMessage('Hint: Number is low 👎')}
else if(guess > randomNum){
  displayMessage('Hint: Number is high 👍')}}


function incrementAttempt(guess) {
  preGuess.innerHTML += `${guess}  `   
  guessAttemp++}
const displayMessage = (message) => {
  lowHigh.innerHTML = message}

function endgame(){
  userInput.value = ''
  userInput.disabled = true;
  btn.style.display = 'none'
  p.classList.add('startBtn')
  board.appendChild(p)
  p.innerHTML = `Play Again`
  startGame()
}

  function startGame() {
const startBtn = document.querySelector('.startBtn')
    startBtn.addEventListener('click' , function newGame() {
      location.href = 'index.html'
    }
    
    )
  }

