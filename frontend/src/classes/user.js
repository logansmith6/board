class User{
    constructor(id, username, wins){
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
        User id:<a id="yesId">${this.id}</a><br>Wins:<a id="winCount">${this.wins}</a>Username:<a id="winnerName">${this.username}</a><br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Quit</button>
        </ul>
        `  
    }

    renderWins(){
        let winCounter = document.getElementById("winCount");
        let addWin = parseInt(document.getElementById("winCount").innerText) + 1;
        winCounter.innerText = 
        `
        ${addWin}
        `
        
        document.body.appendChild(winCounter)
    }

}
