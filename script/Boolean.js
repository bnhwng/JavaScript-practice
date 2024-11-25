let playerDecision=-1;
let winScore = 0;
let loseScore = 0;

function selectChoice(choice) {
  playerDecision = choice;
  evaluate();
}

function reset(){
  winScore=0;
  loseScore=0;
  console.clear();
}

function evaluate() {
  let random = Math.floor(Math.random() * 3);
  function computerChoice() {
    if(random==0){
      console.log('Computer choose: Rock');
    } else if(random==1){
      console.log('Computer choose Paper');
    } else {
      console.log('Computer choose Scissors');
    }
  }
  computerChoice();
  if(playerDecision==random){
    console.log('its a tie');
  } else if((playerDecision==0 && random==2)
  ||(playerDecision==1 && random==0)
  ||(playerDecision==2 && random==1)){
    increaseWinScore();
  }else{
    increaseLoseScore();
  }
  console.log(`win score is: ${winScore}, lose score is: ${loseScore}`);

}
function increaseWinScore(){
  winScore++;
}

function increaseLoseScore(){
  loseScore++;
}