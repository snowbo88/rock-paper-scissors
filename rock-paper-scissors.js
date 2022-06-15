console.log("hi")
computerPlay()

function computerPlay(){
    const hands = ['Rock', 'Paper', 'Scissors']
    const randomHandsIndex = Math.floor(Math.random()*3);
    return console.log(hands[randomHandsIndex]);
}

function playerSelection(){

}