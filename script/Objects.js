let playerDecision=-1;
let win=document.getElementById('wins');
let loses=document.getElementById('loses');
const savedScore=JSON.parse(localStorage.getItem('score'));
const score= savedScore || {
  wins: 0,
  loses: 0,
  ties: 0,
};

//save score permanently
function saveScore(){
  localStorage.setItem('score',JSON.stringify(score));
}

function updateScoreDisplay() {
  win.textContent = score.wins;
  loses.textContent = score.loses;
  document.getElementById('ties').textContent=score.ties;
}

// Display Score on Reload
updateScoreDisplay();

//Helper Choice to keep html code clean
function selectChoice(choice) {
  playerDecision = choice;
  evaluate();
}

function reset(){
  score.wins=0;
  score.loses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreDisplay();
}

function evaluate() {
  let random = Math.floor(Math.random() * 3);
  function computerChoice() {
    if(random==0){
      document.getElementById('computer-move').innerHTML=`Computer choose Rock.`;
    } else if(random==1){
      document.getElementById('computer-move').innerHTML=`Computer choose Paper.`;
    } else {
      document.getElementById('computer-move').innerHTML=`Computer choose Scissors.`;
    }
  }
  computerChoice();
  if(playerDecision==random){
    console.log('its a tie');
    increaseTieScore();
  } else if((playerDecision==0 && random==2)
  ||(playerDecision==1 && random==0)
  ||(playerDecision==2 && random==1)){
    increaseWinScore();
  }else{
    increaseLoseScore();
  }
  updateScoreDisplay();
  saveScore();
}

function increaseWinScore(){
  score.wins++;
}

function increaseLoseScore(){
  score.loses++;
}

function increaseTieScore(){
  score.ties++;
}




// Object
const object1 ={
  name: 'Ngoc Hung Bui',
  age: 23,
  occupation: 'software engineer',
}

document.getElementById('display').innerHTML =
`Name: ${object1.name}, <br>
Age: ${object1.age},<br>
Occupation: ${object1.occupation}<br>`;

console.log(JSON.stringify(object1));

const jsonObj = JSON.stringify(object1);
console.log(JSON.parse(jsonObj));
