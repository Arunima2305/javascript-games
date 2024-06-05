let boxes=document.querySelectorAll('.box');
let boxArray = Array.from(boxes);
let userScore=0;
let userChoice=0;
let computerChoice=0;
let computerScore=0;
let result=document.querySelector('.result-text');
let userScore_span=document.querySelector('.user-score');
let computerScore_span=document.querySelector('.computer-score');
let array=['rock','paper','scissors'];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        userChoice=boxArray.indexOf(box);
        computerChoice=Math.floor(Math.random() * 3);
        if (userChoice==computerChoice)
        {
            result.innerText="Draw as both chose "+array[userChoice];
            result.setAttribute('style','background-color:black');
        }
        else if(userChoice==0 && computerChoice==1 || userChoice==1 && computerChoice==2 || userChoice==2 && computerChoice==0)
        {
            result.innerText="Computer wins! "+array[computerChoice]+" beats "+array[userChoice];
            result.setAttribute('style','background-color:red');
            computerScore++;
            userScore_span.innerText=userScore;
            computerScore_span.innerText=computerScore;
        }
        else
        {
            result.innerText="User wins! "+array[computerChoice]+" beats "+array[userChoice];
            result.setAttribute('style','background-color:green');
            userScore++;
            userScore_span.innerText=userScore;
            computerScore_span.innerText=computerScore;
        }

    })
})
