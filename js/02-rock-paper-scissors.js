
    alert("The Rock, Paper, Scissors Game")
    let choice
    let n=0
    do{
       (n===0)? choice = prompt("what's your choice?(r,p,s)"):choice = prompt("Invalid move. What's your choice?(r,p,s)")
       n++
        
    }while(choice!=='r'&&choice!=='p'&&choice!=='s')

    let what = Math.floor(Math.random() * 3)
    let randomChoice
    if(what === 0){
        randomChoice = 'Rock'
    }else if (what===1){
        randomChoice = 'Paper'
    }else{
        randomChoice = 'Scissors'
    }
    
    //0 i won, 1 tie, 2 user won
    //user coloum, me row
    let outcomeMap = [["We had a tie","You lost","You won"],
                      ["You won","We had a tie","You lost"],
                      ["You lost","You won","We had a tie"]]

    
    let userChoice
    if(choice==='r'){
        userChoice=0
    }else if(choice==='p'){
        userChoice=1
    }else{
        userChoice=2
    }

    alert(`I chose ${randomChoice}, ${outcomeMap[userChoice][what]}`)

