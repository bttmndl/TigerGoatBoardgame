const gameboard = document.querySelector('.game_board');
let row = 5;
let col = 5;
let currTile;
let dropTile;
let ballIndex=0;
let showM = true;
let goat = true;
let curPossibleMove = [];
let gamCordinateState = [];
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


function showMove(e) {
    let curCord = e.target.id.split("-"); // fetching the cordinates which user clicked
    let cr = parseInt(curCord[0]);
    let cc = parseInt(curCord[1]);
    if(gamCordinateState[cr][cc] && goat) insertGoat(cr, cc);
    else if(showM) showPossibleMove(cr, cc); // function to show all the possible move for current tile
    else doMove(cr,cc);
    
}

function insertGoat(cr, cc){
    let id = cr.toString() + "-" + cc.toString();
    document.getElementById(id).style.backgroundColor = 'yellow';
    gamCordinateState[cr][cc] = false;
}

function doMove(cr, cc){
    let id = (cr).toString() + "-" + cc.toString();
    document.getElementById(id).style.background = 'green';
    for(let i=0; i<curPossibleMove.length; i++){
        if(id != curPossibleMove[i]) document.getElementById(curPossibleMove[i]).style.background = '#AAA';
    }
    showM =true;
    goat = true;
    //checkWin();
}

function showPossibleMove(cr, cc){
    let IDS = [];
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
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc+2]){
            let ID = (cr+2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        //show move
        for(let i=0; i<IDS.length; i++){
            document.getElementById(IDS[i]).style.background = 'red';
        }
        curPossibleMove = [...IDS];
        
    }

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
        if(gamCordinateState[cr+1][cc+1]){
            let ID = (cr+1).toString() + "-" + (cc+1).toString();
            IDS.push(ID);
        }
        //eat state
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr+2).toString() + "-" + cc.toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc]){
            let ID = (cr).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        if(gamCordinateState[cr+2][cc+2]){
            let ID = (cr+2).toString() + "-" + (cc+2).toString();
            IDS.push(ID);
        }
        //show move
        for(let i=0; i<IDS.length; i++){
            document.getElementById(IDS[i]).style.background = 'red';
        }
        curPossibleMove = [...IDS];
    }

    if(cr==0 && cc==2){
        
    }

    if(cr==0 && cc==3){

    }

    if(cr==0 && cc==4){
        
    }

    if(cr==1 && cc==0){

    }

    if(cr==1 && cc==1){
        
    }

    if(cr==1 && cc==2){

    }

    if(cr==1 && cc==3){
        
    }

    if(cr==1 && cc==4){
        
    }

    if(cr==2 && cc==0){

    }

    if(cr==2 && cc==1){
        
    }

    if(cr==2 && cc==2){

    }

    if(cr==2 && cc==3){
        
    }
    
    if(cr==2 && cc==4){
        
    }

    if(cr==3 && cc==0){

    }

    if(cr==3 && cc==1){
        
    }

    if(cr==3 && cc==2){

    }

    if(cr==3 && cc==3){
        
    }
    
    if(cr==3 && cc==4){
        
    }

    if(cr==4 && cc==0){

    }

    if(cr==4 && cc==1){
        
    }

    if(cr==4 && cc==2){

    }

    if(cr==4 && cc==3){
        
    }
    
    if(cr==4 && cc==4){
        
    }

    showM = false;
    goat = false;
}

/*

function possibleMove(dragId, dropIndex){

    dragablecells.forEach(draggble =>{
        //corner
        if(dragId =='1' && (draggble.id == '2' || draggble.id == '6' || draggble.id == '7')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId =='2' && (draggble.id == '1' || draggble.id == '3' || draggble.id == '7')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                console.log("hello");
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId =='3' && (draggble.id == '2' || draggble.id == '4' || draggble.id == '7' || draggble.id == '8' || draggble.id == '9')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId =='4' && (draggble.id == '5' || draggble.id == '3' || draggble.id == '7' || draggble.id == '8' || draggble.id == '9')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId == '5' && (draggble.id == '4' || draggble.id == '10' || draggble.id == '9')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId == '6' && (draggble.id == '1' || draggble.id == '7' || draggble.id == '11')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId == '7' && (draggble.id == '3' || draggble.id == '7' || draggble.id == '9' || draggble.id == '13')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId == '21' && (draggble.id == '22' || draggble.id == '16' || draggble.id == '17')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }

        if(dragId == '25' && (draggble.id == '24' || draggble.id == '20' || draggble.id == '19')){
            draggble.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragenter',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('dragleave',(e)=>{
                e.preventDefault();
            })
            draggble.addEventListener('drop',(e)=>{
                e.preventDefault();
                e.target.append(ball[dropIndex]);
            })
        }
        
    })
}
*/


