
document.addEventListener("DOMContentLoaded", () => {    
    fetchUsers();
    newUserForm();  
    dayNightButton();
})
const BASE_URL = "http://127.0.0.1:3000"

    // list all users, or single user passed in
    function fetchUsers(){
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users){    
                let u = new User(user.id, user.username);            
            }
        })
    }
    //render form to create new users, then call function to save them to db
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
        body: JSON.stringify(user) //stringify object passed in
        })
    .then(resp => resp.json())
    .then(user => {
        let u = new User(user.id, user.username, user.wins);   
            hideLogin();
            prepareGame();
            u.id = user.id
            u.renderUser();
            
             
    })     
}
//delete users

function deleteUser(){
    let userId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/users/${userId}`, {
            method: 'DELETE'
    })
    this.location.reload();
}

function hideLogin(){  
    let form = document.getElementById("login-page");
    //let index = document.getElementById("users-container")
    form.style.cssText += "display: none";
    //index.style.cssText += "display: block"
}

function prepareGame(){
    let clearBoardBtn = document.createElement("button");
    clearBoardBtn.innerHTML = 'Fresh Board';
    clearBoardBtn.id = "restart-bttn"
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
    u.renderWins()
}

function dayNightButton(){
    //toggling background to black/white
   

    let toggleTime = document.createElement("button");
    toggleTime.innerHTML = 'Day/Night Mode';
    toggleTime.id = "toggle-time"
    document.body.appendChild(toggleTime)
    toggleTime.addEventListener("click", dayNightToggle)
}

function dayNightToggle(){
    let dayNight = document.body
    dayNight.style.cssText += "background: #050505"
   
    if ( dayNight.style.background === "background: rgb(5, 5, 5)"){
        dayNight.style.cssText += "background: rgb(248, 246, 246)"
    }else {
        if (dayNight.style.cssText === "background: rgb(248, 246, 246)"){
            dayNight.style.cssText += "background: rgb(5, 5, 5)"
        }
    }

    

    
}

function dayNightToggle(){
        
        document.body.classList.toggle('day-night')
    
}







    