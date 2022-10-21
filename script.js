const gameboard = document.querySelector('.game_board');
let row = 5;
let col = 5;
let showM = true;
let goat = true;
let curPossibleMove = [];
let gamCordinateState = [];
let goatOrtiger=[]; //-1-->tiger, 0-->empty, 1--goat>
let GorT=0;
for(let i=0; i<row; i++){
    let column = [];
    for(let j=0; j<col; j++){
        column.push(0);
    }
    goatOrtiger.push(column);
}
goatOrtiger[0][0] = -1;
goatOrtiger[0][4] = -1;
goatOrtiger[4][0] = -1;
goatOrtiger[4][4] = -1;

for(let i=0; i<row; i++){
    let colStates = [];
    for(let j=0; j<col; j++){
        colStates.push(true);
    }
    gamCordinateState.push(colStates);
}
gamCordinateState[0][0] = false;
gamCordinateState[0][4] = false;
gamCordinateState[4][0] = false;
gamCordinateState[4][4] = false;




for(let r = 0; r<row; r++){
    for(let c =0; c<col; c++){
        let tile = document.createElement('cell');
        tile.className = 'cell';
        tile.id = r.toString() +"-"+c.toString();
        tile.addEventListener('click', showMove)
        gameboard.append(tile);
    }
}


//for intial board state
document.getElementById('0-0').classList.add("tiger");
document.getElementById('0-4').classList.add("tiger");
document.getElementById('4-0').classList.add("tiger");
document.getElementById('4-4').classList.add("tiger");

function showMove(e) {
    let curCord = e.target.id.split("-"); // fetching the cordinates which user clicked
    let cr = parseInt(curCord[0]);
    let cc = parseInt(curCord[1]);
    if(gamCordinateState[cr][cc] && goat) insertGoat(cr, cc); // function insert new goat on board
    else if(showM) {
        if(goatOrtiger[cr][cc] == -1){ // tiger
            GorT = -1;
        }else{ // goat
            GorT = 1;
        }
        showPossibleMove(cr, cc);  // function to show all the possible move for current tile
    }else doMove(cr,cc);
}

function insertGoat(cr, cc){
    let id = cr.toString() + "-" + cc.toString();
    document.getElementById(id).classList.add("goat");
    gamCordinateState[cr][cc] = false;
    goatOrtiger[cr][cc] = 1;
}

function doMove(cr, cc){
    let id = (cr).toString() + "-" + cc.toString();
    document.getElementById(id).classList.remove("rainbow");
    if(GorT ==-1){
        document.getElementById(id).classList.add("tiger");
        goatOrtiger[cr][cc] =-1;
    }else if(GorT==1){
        document.getElementById(id).classList.add("goat");
        goatOrtiger[cr][cc] =1;
    }
    
    for(let i=0; i<curPossibleMove.length; i++){
        if(id != curPossibleMove[i]) document.getElementById(curPossibleMove[i]).classList.remove("rainbow");
    }
    gamCordinateState[cr][cc] = false;
    showM =true;
    goat = true;
    if(GorT==-1){
        document.getElementById(curPossibleMove[curPossibleMove.length-1]).classList.remove("tiger");
    }else if(GorT==1){
        document.getElementById(curPossibleMove[curPossibleMove.length-1]).classList.remove("goat");
    }
    //checkWin();
}

function showPossibleMove(cr, cc){
    let IDS = [];
    //0
    if(cr==0 && cc==0){
        //blank state
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc+2]){
            let ID = (cr+2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        } 
    }
    //1
    if(cr==0 && cc==1){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //2
    if(cr==0 && cc==2){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+2]){
            let ID = cr.toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc+2]){
            let ID = (cr+2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc-2]){
            let ID = (cr+2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc+2]){
            let ID = (cr+2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
    }
    //3
    if(cr==0 && cc==3){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //4
    if(cr==0 && cc==4){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc-2]){
            let ID = (cr+2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
    }
    //5
    if(cr==1 && cc==0){
        //blank state
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = (cr).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //6
    if(cr==1 && cc==1){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //7
    if(cr==1 && cc==2){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //8
    if(cr==1 && cc==3){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc-2]){
            let ID = (cr+2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
    }
    //9
    if(cr==1 && cc==4){
        //blank state
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //10
    if(cr==2 && cc==0){
        //blank state
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = (cr).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc+2]){
            let ID = (cr-2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc+2]){
            let ID = (cr+2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
    }
    //11
    if(cr==2 && cc==1){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //12
    if(cr==2 && cc==2){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc-2]){
            let ID = (cr+2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc+2]){
            let ID = (cr+2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc-2]){
            let ID = (cr-2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc+2]){
            let ID = (cr-2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
    }
    //13
    if(cr==2 && cc==3){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
    }
    //14
    if(cr==2 && cc==4){
        //blank state
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc-2]){
            let ID = (cr-2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc-2]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //15
    if(cr==3 && cc==0){
        //blank state
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = (cr).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //16
    if(cr==3 && cc==1){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //17
    if(cr==3 && cc==2){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //18
    if(cr==3 && cc==3){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+1][cc-1]){
            let ID = (cr+1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc-2]){
            let ID = (cr-2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
    }
    //19
    if(cr==3 && cc==4){
        //blank state
        if(gamCordinateState[cr+1][cc]){
            let ID = (cr+1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //20
    if(cr==4 && cc==0){
        //blank state
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc+2]){
            let ID = (cr-2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
    }
    //21
    if(cr==4 && cc==1){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc+2]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //22
    if(cr==4 && cc==2){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc+1]){
            let ID = (cr-1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+2]){
            let ID = cr.toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc-2]){
            let ID = (cr-2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc+2]){
            let ID = (cr-2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
    }
    //23
    if(cr==4 && cc==3){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr][cc+1]){
            let ID = cr.toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr+2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
    }
    //24
    if(cr==4 && cc==4){
        //blank state
        if(gamCordinateState[cr][cc-1]){
            let ID = (cr).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc]){
            let ID = (cr-1).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-1][cc-1]){
            let ID = (cr-1).toString() + "-" + (cc-1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr][cc-2]){
            let ID = (cr).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc]){
            let ID = (cr-2).toString() + "-" + (cc).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr-2][cc-2]){
            let ID = (cr-2).toString() + "-" + (cc-2).toString();
            IDS.push(ID);
        }
    }

    //show move
    for(let i=0; i<IDS.length; i++){
        document.getElementById(IDS[i]).classList.add("rainbow");
    }
    curPossibleMove = [...IDS];
    let curId = cr.toString()+"-"+cc.toString();
    curPossibleMove.push(curId);
    
    goatOrtiger[cr][cc] = 0;
    // all traking
    showM = false;
    goat = false;
    gamCordinateState[cr][cc] = true;
}

