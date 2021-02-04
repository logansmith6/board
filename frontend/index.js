document.addEventListener("DOMCOntentLoaded", () => {
    debugger;

    const BASE_URL = "http://127.0.0.1:3000"
    // list all users

    function fetchUsers(){
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users){
                let u = new User(user.id, user.username, user.email, user.password)
            }

        })

    }

    //create new users

    //delete users
})