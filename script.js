let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newgame");
let winnerMsg=document.querySelector("#messege");
let msgContainer=document.querySelector(".messegeContainer");



let turnX=true;

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
    })
});

const showWinner = (winner) => {
    winnerMsg.innerText=`congratulations🥳, winner is ${winner}!`;
    msgContainer.classList.remove("hide");
}

checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3 && pos3===pos1){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
        
    }
};