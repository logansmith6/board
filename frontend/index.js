
document.addEventListener("DOMContentLoaded", () => {
    newUserForm()
    fetchUsers()
    
    
    
})

const BASE_URL = "http://127.0.0.1:3000"
    // list all users

    function fetchUsers(){
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users){
                let u = new User(user.id, user.username, user.email, user.password_digest)
                u.renderUser();
            }
        })
    }

    //create new users
function newUserForm(){
    
    
    let registration = document.getElementById("signMeUp");
    registration.addEventListener("submit", ()=>{
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password_digest = document.getElementById("password").value;
    let user = {
        username: username,
        email: email,
        password_digest: password_digest
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
        let u = new User(user.id, user.username, user.email, user.password_digest);
        
        })
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

    