
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
 

    //delete users

    function deleteUser(){
        let userId = parseInt(event.target.dataset.id)

        fetch(`${BASE_URL}/users/${userId}`, {
            method: 'DELETE'
        })
        this.location.reload();
    }

    