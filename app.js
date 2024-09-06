let boxes  = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");


let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
        console.log("button was clicked");
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winner();
    })
})
const showWinner = (winner)=>{
    msg.innerText = `Congractulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const winner = () => {
    for(let pattern of winPatterns){
        const pos1 = boxes[pattern[0]].innerText;
        const pos2 = boxes[pattern[1]].innerText;
        const pos3 = boxes[pattern[2]].innerText;

        if(pos1!= "" && pos2!=""&&pos3!="" ){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
};


newBtn.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        if(box.innerText !== ''){
            box.innerText = "";
            box.disabled = false;
            msgContainer.classList.add("hide");
        }
    })
})

reset.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        if(box.innerText !== ''){
            box.innerText = "";
            box.disabled = false;
            msgContainer.classList.add("hide");
        }
    })
})



