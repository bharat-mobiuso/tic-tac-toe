const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");
const cell9 = document.getElementById("cell9");

const gameStatusText = document.getElementById("game-status-text");

let player = 1;
var gameBoard = [null,null,null,null,null,null,null,null,null,null];
var winningCases = [[1,2,3],[4,5,6],[7,8,9],
                    [1,4,7],[2,5,8],[3,6,9],
                    [1,5,9],[3,5,7]];

const cell = document.querySelectorAll('.cell');
cell.forEach(function(cellInstance) {
    cellInstance.addEventListener('click',function(){
        console.log(this.getAttribute("data-value"));
            
        var clickedCell = this.getAttribute("data-value");
        gameBoard[clickedCell] = player ? "X" : "0";
        console.log(gameBoard);
        this.value = player ? "X" : "0";
        player = player ? 0 : 1;
        this.setAttribute("disabled",true);
        gameStatus();
    });
});

function gameStatus(){
    if(isOver()){
        gameStatusText.innerHTML = player ? "Player '0' Wins" : "Player 'X' Wins";
        gameStatusText.style.color = 'green';
        setDisabled(true);
    } 
    else if(isDraw()){
        gameStatusText.innerHTML = "game is draw";
        gameStatusText.style.color = 'red';
    }
    else{
        gameStatusText.innerHTML = player ? "Player 'X' Turn" : "Player '0' Turn";
    }
}

function isOver(){
    for(let i=0;i<8;i++){
        var Case = winningCases[i];
        if(gameBoard[Case[0]] && gameBoard[Case[0]] === gameBoard[Case[1]] && gameBoard[Case[1]] === gameBoard[Case[2]]){
            const cell = document.querySelectorAll('.cell').forEach(function(cellInstance){
                let cellNumber= cellInstance.getAttribute("data-value");
                if(cellNumber == Case[0] || cellNumber == Case[1] || cellNumber == Case[2]){

                    cellInstance.style.backgroundColor = 'green';
                    cellInstance.style.color = 'white';
                    //console.log("inner",cellInstance)
                }
                //console.log("outer");
            })
            return true;
        }
    }
    return false;
}

function isDraw(){

    for(let i=1;i<10;i++){
        if(gameBoard[i] == null){
            return false;
        }
    }
    return true;
}

function setDisabled(value){
    const cell = document.querySelectorAll('.cell').forEach(function(cellInstance){
        cellInstance.disabled = value;
    })
}
function reset(){
    setDisabled(false);
    resetCellValue();
    resetCellColor();
    
    player = 1;
    gameStatusText.innerHTML = "Player 'X' Turn";
    gameStatusText.style.color = 'black';
}

function resetCellValue(){
     
    gameBoard.fill(null);

    const cell = document.querySelectorAll('.cell').forEach(function(cellInstance){
        cellInstance.value = null;
    });
}

function resetCellColor(){
    
    const cell = document.querySelectorAll('.cell').forEach(function(cellInstance){
        cellInstance.removeAttribute("style")
    });

}
