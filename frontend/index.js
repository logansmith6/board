
document.addEventListener("DOMContentLoaded", () => {
    
    fetchUsers();
    newUserForm();
    
    
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
        username: username,
        wins: 0
        
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
    .then(users => {
        let u = new User(user.id, user.username, user.wins);
        if (u.username != "has already been taken"){
            
            hideLogin();
            prepareGame();
            fetchUsers()
            u.id = users.id
            console.log(users.wins)
        
            u.renderUser();
            
        }   
            else {
                alert("username taken")
                this.location.reload()
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
    let bye = document.getElementById("checkerboard");
    bye.innerHTML = '';
    setActiveCol(undefined);
    setActiveCoin(undefined)
     document.getElementById("checkerboard").style.cssText="display: block";
    
    renderBoard();
    
}
//when a user wins, the user model is patched in the database with a new game attached to it. it's wins count also goes up by +1.
function postGame(){
    event.preventDefault();
    
    let usId = parseInt(document.getElementById("yesId").innerText);
    let nameID = document.getElementById("winnerName").innerText;
    let winId = parseInt(document.getElementById("winCount").innerText)
    
    let game = {
        user_id: usId
    }
    let u = new User(usId, nameID, winId, game )
    
    
    fetch(`${BASE_URL}/users/${usId}`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(u)
        })
    .then(resp => resp.json())
}










    