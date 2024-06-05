let box=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('.msg');
let playAgain=document.querySelector('.play-again');

let count=1;
box.forEach((boxs)=>
{
    boxs.addEventListener("click",()=>{
        if(count%2==0)
        {
            boxs.innerText="O";
        }
        else
        {
            boxs.innerText="X";
        }
        count++;
        boxs.disabled=true;
        if (checkWinner())
            {
                box.forEach((boxs)=>
                {
                    boxs.disabled=true;
                })
                if (count%2==0)
                {
                    msg.innerText="X";
                }
                else
                {
                    msg.innerText="0";
                }
               msg.innerText=msg.innerText+" is the winner";
               msgContainer.classList.remove("hidden"); 

            }

        
    })
})
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const checkWinner=()=>{
    for(let pattern of winPattern)
        {
            if(box[pattern[0]].innerText==box[pattern[1]].innerText && box[pattern[1]].innerText==box[pattern[2]].innerText && box[pattern[0]].innerText!="")
            {
                box[pattern[0]].style.backgroundColor="green";
                box[pattern[1]].style.backgroundColor="green";
                box[pattern[2]].style.backgroundColor="green";
                return true;
            }
        }
}

const newGame=()=>{
    count=1;
    box.forEach((boxs)=>
    {
        boxs.innerText="";
        boxs.disabled=false;
        boxs.style.backgroundColor="wheat";
    })
    msgContainer.classList.add("hidden");
}

reset.addEventListener("click",newGame);
playAgain.addEventListener("click",newGame);
