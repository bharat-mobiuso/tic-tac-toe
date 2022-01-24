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

function cell1Click(){
    if(player)
    {    
        cell1.value = "X";
    }
    else{
        cell1.value = "0";
    }
    player = player ? 0 : 1;
    cell1.setAttribute("disabled",true);
    gameStatus();
}
function cell2Click(){
    if(player)
    {    
        cell2.value = "X";
    }
    else{
        cell2.value = "0";
    }
    cell2.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
} 
function cell3Click(){
    if(player)
    {    
        cell3.value = "X";
    }
    else{
        cell3.value = "0";
    }
    cell3.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
} 
function cell4Click(){
    if(player)
    {    
        cell4.value = "X";
    }
    else{
        cell4.value = "0";
    }
    cell4.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
} 
function cell5Click(){
    if(player)
    {    
        cell5.value = "X";
    }
    else{
        cell5.value = "0";
    }
    cell5.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
} 
function cell6Click(){
    if(player)
    {    
        cell6.value = "X";
    }
    else{
        cell6.value = "0";
    }
    cell6.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
} 
function cell7Click(){
    if(player)
    {    
        cell7.value = "X";
    }
    else{
        cell7.value = "0";
    }
    cell7.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
} 
function cell8Click(){
    if(player)
    {    
        cell8.value = "X";
    }
    else{
        cell8.value = "0";
    }
    cell8.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
}
function cell9Click(){
    if(player)
    {    
        cell9.value = "X";
    }
    else{
        cell9.value = "0";
    }
    cell9.setAttribute("disabled",true);
    player = player ? 0 : 1;
    gameStatus();
}

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
    if( isRow1Over() || isRow2Over() || isRow3Over() || 
        isCol1Over() || isCol2Over() || isCol3Over() || 
        isCross1Over() || isCross2Over() ){
        return true;
    }
    return false;

    function isRow1Over(){
        if((cell1.value === "X" || cell1.value === '0')&&cell1.value === cell2.value && cell2.value === cell3.value){
            cell1.style.color = 'red';
            cell2.style.color = 'red';
            cell3.style.color = 'red';
            return true;
        }
        return false;
    }
    function isRow2Over(){
        if((cell4.value === "X" || cell4.value === '0')&&cell4.value === cell5.value && cell5.value === cell6.value){
            cell4.style.color = 'red';
            cell5.style.color = 'red';
            cell6.style.color = 'red';
            return true;
        }
        return false;
    }
    function isRow3Over(){
        if((cell7.value === "X" || cell7.value === '0')&&cell7.value === cell8.value && cell8.value === cell9.value){
            cell7.style.color = 'red';
            cell8.style.color = 'red';
            cell9.style.color = 'red';
            return true;
        }
        return false;
    }
    function isCol1Over(){
        if((cell1.value === "X" || cell1.value === '0')&&cell1.value === cell4.value && cell4.value === cell7.value){
            cell1.style.color = 'red';
            cell4.style.color = 'red';
            cell7.style.color = 'red';
            return true;
        }
        return false;
    }
    function isCol2Over(){
        if((cell2.value === "X" || cell2.value === '0')&&cell2.value === cell5.value && cell5.value === cell8.value){
            cell2.style.color = 'red';
            cell5.style.color = 'red';
            cell8.style.color = 'red';
            return true;
        }
        return false;
    }
    function isCol3Over(){
        if((cell3.value === "X" || cell3.value === '0')&&cell3.value === cell6.value && cell6.value === cell9.value){
            cell3.style.color = 'red';
            cell6.style.color = 'red';
            cell9.style.color = 'red';
            return true;
        }
        return false;
    }
    function isCross1Over(){
        if((cell1.value === "X" || cell1.value === '0')&&cell1.value === cell5.value && cell5.value === cell9.value){
            cell1.style.color = 'red';
            cell5.style.color = 'red';
            cell9.style.color = 'red';
            return true;
        }
        return false;
    }
    function isCross2Over(){
        if((cell3.value === "X" || cell3.value === '0')&&cell3.value === cell5.value && cell5.value === cell7.value){
            cell3.style.color = 'red';
            cell5.style.color = 'red';
            cell7.style.color = 'red';
            return true;
        }
        return false;
    }
}
function isDraw(){
    if(   (cell1.value === "X" || cell1.value === '0')
        &&(cell2.value === "X" || cell2.value === '0')
        &&(cell3.value === "X" || cell3.value === '0')
        &&(cell4.value === "X" || cell4.value === '0')
        &&(cell5.value === "X" || cell5.value === '0')
        &&(cell6.value === "X" || cell6.value === '0')
        &&(cell7.value === "X" || cell7.value === '0')
        &&(cell8.value === "X" || cell8.value === '0')
        &&(cell9.value === "X" || cell9.value === '0')){
            return true;
    }
    return false;
}
function setDisabled(value){
    cell1.disabled = value;
    cell2.disabled = value;
    cell3.disabled = value;
    cell4.disabled = value;
    cell5.disabled = value;
    cell6.disabled = value;
    cell7.disabled = value;
    cell8.disabled = value;
    cell9.disabled = value;
}
function reset(){
    setDisabled(false);
    resetCellValue();
    resetCellColor();
    
    player = 1;
    gameStatusText.innerHTML = "Player 'X' Turn";
    gameStatusText.style.color = 'black';
    console.log("reset called");
}

function resetCellValue(){ 
    cell1.value = null;
    cell2.value = null;
    cell3.value = null;
    cell4.value = null;
    cell5.value = null;
    cell6.value = null;
    cell7.value = null;
    cell8.value = null;
    cell9.value = null;
}

function resetCellColor(){
    
    cell1.style.color = 'black';
    cell2.style.color = 'black';
    cell3.style.color = 'black';
    cell4.style.color = 'black';
    cell5.style.color = 'black';
    cell6.style.color = 'black';
    cell7.style.color = 'black';
    cell8.style.color = 'black';
    cell9.style.color = 'black';

}
