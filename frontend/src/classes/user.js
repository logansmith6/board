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
        User id: <li>Username:${this.username}</li><p id="winner">${this.username}</p><br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Quit</button>
        </ul>
        `  
    }

}
