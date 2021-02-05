class User{
    constructor(id, username, email, password_digest){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password_digest = password_digest;
    }




    //user instance method

    renderUser(){
        let shownUser = document.getElementById("users-container");
        shownUser.innerHTML += 
        `
        <ul>
        Username:<li class="listedUsers">${this.username}</li><br>
        <li>
        Email: ${this.email}<br>
        User Id: ${this.id}<br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        </ul>
        `
        
    }

}
