
document.addEventListener("DOMContentLoaded", () => {
    newUserForm()
    fetchUsers()
    authenticateUsers()
    
    
})

const BASE_URL = "http://127.0.0.1:3000"
    // list all users

    function fetchUsers(){
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users){
                let u = new User(user.id, user.username, user.email, user.password)
                u.renderUser();
            }
        })
    }

    //create new users
function newUserForm(){
    
       
    let registration = document.getElementById("signMeUp");
    registration.addEventListener("submit", ()=>{
        let username = document.getElementById("usernameReg").value;
        let email = document.getElementById("emailReg").value;
        let password = document.getElementById("passwordReg").value;
    let user = {
        username: username,
        email: email,
        password: password
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
        let u = new User(user.id, user.username, user.email, user.password);
        
        })
    })
}
 
function authenticateUsers(){
    let registration = document.getElementById("patMeDown");
    registration.addEventListener("submit", ()=>{
        let x = document.getElementById("usernameLog").value;
        let y = document.getElementById("passwordLog").value;
        let user = {
            username: x,
            password: y
                    }    
                    debugger
            let people = [...document.querySelectorAll('.listedUsers')].map(i => i.textContent)
        
            for(const person of people){
                if (x === person)
                {
                    //openGames()
                }else {
                    this.location.reload();
                    alert("Incorrect Username/Password.")
                }
            }
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

    