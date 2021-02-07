class User{
    constructor(id, username, wins = 0){
        this.id = id;
        this.username = username;
        this.wins = wins;
        
        
        
        
        
        
    }




    //user instance method
    
    renderUser(){
        let shownUser = document.getElementById("users-container");
        shownUser.innerHTML += 
        `
        <ul>
        User id:<p id="yesId">${this.id}<p id="winCount"${this.wins}</p>Username:<p id="winnerName">${this.username}</p><br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Quit</button>
        </ul>
        `  
    }

}
