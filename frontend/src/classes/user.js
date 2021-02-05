class User{
    constructor(id, username, email, password){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }




    //user instance method

    renderUser(){
        let shownUser = document.getElementById("users-container");
        shownUser.innerHTML += 
        `
        <ul>
        <li class="listedUsers">
        Username: ${this.username}<br>
        </li>
        Email: ${this.email}<br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        </ul>
        `
    }
}
