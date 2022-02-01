let boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn')
const spaces = [];
const playerOne = "O";
const playerTwo = "X"; 
let CurrentPlayer = playerOne;

let drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid; `
        } 
        if (index > 5) {
            styleString += `border-top: 3px solid; `
        } 
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid; `
        } 
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid; `
        } 
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
    
};
    const boxClicked = (e) => {
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = CurrentPlayer;
        e.target.innerText = CurrentPlayer;

        if(playerHasWon()){
            playText.innerText = `${CurrentPlayer} has won`;
            return;
        }
        CurrentPlayer = CurrentPlayer === playerOne ? playerTwo : playerOne;
    }
};
const playerHasWon = () => {
    if (spaces[0] ===CurrentPlayer){
        if(spaces[1] === CurrentPlayer && spaces[2] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins up top.`)
            return true;
        }
        if(spaces[3] === CurrentPlayer && spaces[6] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins left.`)
            return true;
        }
        if(spaces[4] === CurrentPlayer && spaces[8] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins diagonaly.`)
            return true;
        }
    }
    if (spaces[1] ===CurrentPlayer){
        if(spaces[0] === CurrentPlayer && spaces[2] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins up top.`)
            return true;
        }
        if(spaces[4] === CurrentPlayer && spaces[7] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins left.`)
            return true;
        }
    }
    if (spaces[2] ===CurrentPlayer){
        if(spaces[0] === CurrentPlayer && spaces[1] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins bottom.`)
            return true;
        }
        if(spaces[8] === CurrentPlayer && spaces[5] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins Right.`)
            return true;
        }
        if(spaces[4] === CurrentPlayer && spaces[6] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins diagonaly.`)
            return true;
        }
    }
    if (spaces[3] ===CurrentPlayer){
        if(spaces[4] === CurrentPlayer && spaces[5] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins up top.`)
            return true;
        }
        if(spaces[0] === CurrentPlayer && spaces[6] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins left.`)
            return true;
        }
    }
    if (spaces[6] ===CurrentPlayer){
        if(spaces[7] === CurrentPlayer && spaces[8] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins up top.`)
            return true;
        }
        if(spaces[0] === CurrentPlayer && spaces[3] === CurrentPlayer){
            console.log(`${CurrentPlayer} wins left.`)
            return true;
        }
    }
}

const restart = () => {
    spaces.forEach((space, index) =>{
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
    });
    playText.innerText = `Welcom to Tic Toc Toe`;
}
restartBtn.addEventListener('click',restart);
restart()

drawBoard();