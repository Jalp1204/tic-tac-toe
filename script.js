let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newgame");
let winnerMsg=document.querySelector("#messege");
let msgContainer=document.querySelector(".messegeContainer");
let xScoreElement=document.querySelector("#xScore");
let oScoreElement=document.querySelector("#oScore");
let drawScoreElement=document.querySelector("#drawScore");
let resetScoreBtn=document.querySelector("#resetScore");

let turnX=true;
let moveCount = 0;
let gameOver = false;

let xScore=0;
let oScore=0;
let draws=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        moveCount++;
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
        if(moveCount===9 && !gameOver){
            showDraw();
        }
               
    })
});


const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    winnerMsg.innerText="";
    msgContainer.classList.add("hide");
}

const showDraw = () => {
    gameOver = true;
    draws++;
    updateScoreBoard();
    winnerMsg.innerText = "It's a Draw! 🤝";
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const showWinner = (winner) => {
    gameOver = true;
    if(winner === "X"){
    xScore++;
    }
    else{
        oScore++;
    }

    updateScoreBoard();
    winnerMsg.innerText=`congratulations🥳, winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3 && pos3===pos1){
                showWinner(pos1);
                return;
            }
        }
        
    }
};

const resetScoreBoard = () => {
    xScore=0;
    oScore=0;
    draws=0;
    
    updateScoreBoard();
};


const updateScoreBoard = () => {
    xScoreElement.innerText=`X : ${xScore}`;
    drawScoreElement.innerText=`draws : ${draws}`;
    oScoreElement.innerText=`O : ${oScore}`;
};
updateScoreBoard();

const resetGame = () =>{
    turnX=true;
    moveCount=0;
    gameOver=false;
    enabledBoxes();
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
resetScoreBtn.addEventListener("click",resetScoreBoard);