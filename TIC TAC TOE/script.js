let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");

let play0=true;
let newB=document.querySelector(".reset-btn")
let NEWBUT=document.querySelector(".new-btn")
let msgBox=document.querySelector(".msg")
let msg=document.querySelector("#mg1")
let count=0;







//WIN PATTERNS
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
boxes.forEach((box) => {
  box.addEventListener("click",() => {
    console.log('clicked');
    box.innerText="X"; 
    if(play0===true){
        box.innerText="X";
        play0=false;
    }
    else{
        box.innerText="0"; 
        play0=true;
    }
    box.disabled=true;
    checkwinner();

  }
  )
}
)
const disablebtns=() => {
for (const box of boxes) {
      box.disabled=true
}
}
const enablebtns=() => {
for (const box of boxes) {
      box.disabled=false;
      box.innerText=""
      NEWBUT.classList.add("hide");
}
}

const showWinner=(winner) => {
  msg.innerText=`Winner is ${winner}`
  msgBox.classList.remove("hide");
  NEWBUT.classList.remove("hide");
  disablebtns();
}






// const draw=()=>{
//     msg.innerText=`Match is Draw`
//   msgBox.classList.remove("hide");
//   NEWBUT.classList.remove("hide");
// //   disablebtns();
// }


const checkwinner=()=>
    {
        for (const pattern of win) {
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;

                if(pos1val!==""&&pos2val!==""&&pos3val!==""){
                    
                    if(pos1val===pos2val&&pos2val===pos3val){
                        console.log('Winner Winner Chicken Dinner',pos1val);
                        showWinner(pos1val);
                    }
                    
                    
                    
                }
        }
    }
    
    

const ResetGame=() => {
  play0=true;
  enablebtns();
  msgBox.classList.add("hide")
}
reset.addEventListener("click",ResetGame);
NEWBUT.addEventListener("click",ResetGame);



// for (const box of boxes) {
//     box.addEventListener("click",increasecount());
    
// }
// console.log('count',count);
boxes.forEach((box) => {
    box.addEventListener("click",() => {
      count=count+1
      console.log('count',count);
    }
    );
}
)
// console.log('count',count);

