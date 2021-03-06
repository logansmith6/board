//creats a gameboard visual then checks for a user-click on one of the boxes
function renderBoard(){    
    for(let i = 0; i < 8; i++){
        let color, boxes, borders;
        for(let j = 0; j < 8; j++){
            if((i + j) % 2 === 0){
                color = "black";
            } else {
                color = "white";
            }

            boxes = document.createElement('div');
            boxes.id = "column-" + i + j;
            borders = document.createElement('div');
            boxes.classList.add('box');
            boxes.classList.add(color);
            boxes.classList.add('checkerCol');
            borders.id = "checker-" + i + j;
            borders.classList.add('borderCol');

            document.getElementById("checkerboard").appendChild(boxes);

            if (i < 3 && color == "black"){
                document.getElementById("column-" + i + j).appendChild(borders);
                borders.classList.add("white-checker")
                borders.classList.add("black-border");
            } else if (i > 4 && color =="black") {
                document.getElementById("column-" + i + j).appendChild(borders);
                borders.classList.add("black-checker")
                borders.classList.add("white-border");
                
            }
            
        }
    }
    let checkerCols = document.getElementsByClassName("checkerCol")
    
    for(let i = 0; i < checkerCols.length; i++){
        checkerCols[i].onclick = function (check){
            
            let choice = checkerCols[77]
            
            while(choice){
                if (choice.tagName === "div"){
                    choice.classList.remove("red-border");
                }
                choice = choice.nextSibling;
            }
            onColClick(check, this);
        }
    }

}

function onColClick(check, choice){
    
    if(choice.children[0]){
        choice.classList.add("red-border");
        let currentCol = getActiveCol();
        if (currentCol && currentCol !== choice){
            setActiveCol(currentCol);
            setActiveCoin(currentCol.children[0]);
        } else {
           
            setActiveCol(choice);
            setActiveCoin(choice.children[0]);
        }
    }
    let activeCol = getActiveCol();
    let activeCoin = getActiveCoin();


    if(activeCol && activeCol !== check.currentTarget){
        if(Math.abs(activeCol.offsetLeft - check.currentTarget.offsetLeft) > 80 || 
        Math.abs(activeCol.offsetTop - check.currentTarget.offsetTop) > 80) {
            check.currentTarget.classList.remove("red-border");
            activeCoin.parentNode.classList.add("red-border");
            alert("Illegal Move.");
        } else {
            if(activeCol &&activeCol.classList[1] !== choice.classList[1]){
            alert("Illegal Move.")
            check.currentTarget.classList.remove("red-border");
            activeCoin.parentNode.classList.add("red-border");
        } else {
            moveCoin(activeCol, choice, activeCoin) 
            setActiveCol(undefined);
            setActiveCoin(undefined)  
        }
     }   
    }
    
}

function  moveCoin(activeCol, choice, coin){
    if (choice.firstChild){
        let activeColClass = coin.classList;
        let choiceClass = choice.firstChild.classList;

        if(activeColClass[1] === choiceClass[1]){
            alert("Illegal Move.")
            choice.classList.remove("red-border");
            activeCol.classList.add("red-border");
            return;
        }
        

    }

    while(activeCol.firstChild){
        activeCol.removeChild(activeCol.firstChild);
    }
    while(choice.firstChild){
        
        choice.removeChild(choice.firstChild);
        
        
    }
    choice.appendChild(coin);
    activeCol.classList.remove("red-border");
    setActiveCol(choice);
        if(document.getElementsByClassName("black-checker").length === 0){ 
            alert("White Wins"); 
            clean();
        }
        if(document.getElementsByClassName("white-checker").length === 0){ 
            alert("Black Wins"); 
            postGame();
            clean();
        }
        
}



function setActiveCol(choice) {
    this.activeCol = choice;
}

function getActiveCol() {
    return this.activeCol;
}

function setActiveCoin(coin) {
    this.activeCoin = coin;
}

function getActiveCoin() {
    return this.activeCoin;
}




