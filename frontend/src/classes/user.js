class User{
    constructor(id, username){
        this.id = id;
        this.username = username;
        
    }




    //user instance method

    renderUser(){
        let shownUser = document.getElementById("users-container");
        shownUser.innerHTML += 
        `
        <ul>
        <li>Username:${this.username}</li><br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        </ul>
        `
        
    }

}
