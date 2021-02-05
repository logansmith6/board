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
        Username:<li class="listedUsers">${this.username}</li><br>
        Email: ${this.email}<br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        </ul>
        `
    }
}
