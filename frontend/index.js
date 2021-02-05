document.addEventListener("DOMContentLoaded", () => {
    //newUserForm()
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
        let registration = document.getElementById("registration");
        registration.addEventListener("submit", ()=>{
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password")

            let user = {
                username: username,
                email: email,
                password: password
            }

            

        })

    }

    //delete users

    