
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
                u.renderUser();
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
            showBoard();
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

function showBoard(){
    let form = document.getElementById("login-page");
    let index = document.getElementById("users-container")
    form.style.cssText += "display: none";
    index.style.cssText += "display: block"

}



    