import './style.css'

let computerText = document.querySelector('#computer-text')
let userText = document.querySelector('#user-text')
let userScoreText = document.querySelector("#user-score")
let computerScoreText = document.querySelector("#computer-score")
let user;
let computer;
let userScore = 0;
let computerScore = 0
let allBtns = document.querySelectorAll(".btn")

let optionObj = {
    1 : "STONE",
    2 : "PAPER",
    3 : "SCISSOR"
}


allBtns.forEach((btn) =>{
    btn.addEventListener("click",() => {
        user = btn.textContent;
        userText.textContent = btn.textContent
        computer = computerChoose()
        computerText.textContent = computer
        let res = checkWinner()
        if(res=="You Win"){
            userScore+=1
        }else if(res=="You Loose"){
            computerScore+=1
        }
        userScoreText.textContent=userScore
        computerScoreText.textContent=computerScore
    })
})

function computerChoose(){
    let randNum = Math.floor(Math.random() * 3)+1
    console.log(randNum);
    return optionObj[randNum]
}

function checkWinner(){
    if(user==computer){
        return "Draw"
    }else if(computer=="STONE"){
        return (user=="PAPER") ? "You Win" : "You Loose"
    }else if(computer=="PAPER"){
        return (user=="SCISSOR") ? "You Win" : "You Loose"
    }else if(computer=="SCISSOR"){
        return (user=="STONE") ? "You Win" : "You Loose"
    }
}
// let startBtn = document.querySelector("#start-btn")

// startBtn.addEventListener("click",() => {
//     if(startBtn.textContent=="Start"){
//         startBtn.innerText="Quit"
//         console.log(startBtn.innerText);
//         allBtns.forEach(btn => {
//             btn.disabled=false
//         })
//     }
//     if(startBtn.textContent=="Quit"){
//         startBtn.textContent="Start"
//         allBtns.forEach(btn => {
//             btn.disabled=false
//         })
//     }
// })