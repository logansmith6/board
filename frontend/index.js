
document.addEventListener("DOMContentLoaded", () => {
    newUserForm();
    fetchUsers();
    
    
    
})

const BASE_URL = "http://127.0.0.1:3000"
    // list all users

    function fetchUsers(){
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users){
                let u = new User(user.id, user.username);
            }
        })
    }

    //create new users
function newUserForm(){ 
    let registration = document.getElementById("renderForm");
    registration.innerHTML += 
    ` 
            <form class="login-form" id="signMeUp">
            <input type="text" placeholder="username" id="username">
            <input type="submit" class="login-button" value="Choose Username">
            </form>
    `
    registration.addEventListener("submit", newUserFormSubmission)
    
}

function newUserFormSubmission(){    
    event.preventDefault();
    let username = document.getElementById("username").value;
    let user = {
        username: username
                } 
    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        })
    .then(resp => resp.json())
    .then(user => {
        let u = new User(user.id, user.username);
        if (u.username != "has already been taken"){
            u.renderUser();
            hideLogin();
            prepareGame();
            
        }   
            else {
                alert("username taken")
        }
            
        })
    
}
//delete users

function deleteUser(){
    let userId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/users/${userId}`, {
            method: 'DELETE'
    })
    //this.location.reload();
}

function hideLogin(){
    let form = document.getElementById("login-page");
    let index = document.getElementById("users-container")
    form.style.cssText += "display: none";
    index.style.cssText += "display: block"
}

function prepareGame(){
    let clearBoardBtn = document.createElement("button");
    clearBoardBtn.innerHTML = 'restart game';
    document.body.append(clearBoardBtn);
    clearBoardBtn.addEventListener("click", clean)
}

function clean(){
    document.getElementById("checkerboard").innerHTML="";
    renderBoard();
}


function fetchMoves(){
    fetch(`${BASE_URL}/moves`)
    .then(resp => resp.json())
    .then(moves => {
        for (const move of moves){
            let m = new Move(move.id, move.position, move.user_id, move.game_id);
        }
    })
}

function fetchGames(){
    fetch(`${BASE_URL}/games`)
    .then(resp => resp.json())
    .then(games => {
        for (const game of games){
            let g = new Game(game.id, game.user_id);
            
        }
    })
}

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
            let choice = checkerCols[0]
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
    choice.classList.add("red-border");
    if(choice.children[0]){
        let currentCol = getActiveColumn();
        if (currentCol && currentCol !== choice){
            setActiveCol(choice);
            setActiveCoin(currentCol.children[0]);
        } else {
            setActiveCol(choice);
            setActiveCoin(choice.children[0]);
        }
    }
    let activeCol = getActiveColumn();
    let activeCoin = getActiveCoin();

    if(activeCol && activeCol !== check.currentTarget){
        if(Math.abs(activeCol.offsetLeft - check.currentTarget.offsetLeft) > 80 || 
        Math.abs(activeColumn.offsetTop - check.currentTarget.offsetTop) > 80) {
            alert("Illegal Move");
            check.currentTarget.classList.remove("red-border");
            activeCoin.parentNode.classList.add("red-border");
        } else {
            moveCoin(activeCol, choice, activeCoin)
        }
    }
}

function  moveCoin(activeCol, choice, activeCoin){
    if (choice.firstChild){
        let activeColClass = activeCoin.classList;
        let choiceClass = choice.firstChild.classList;

        if(activeColClass[1] === choiceClass[1]){
            alert("Illegal Move.")
        }
    }
}








    