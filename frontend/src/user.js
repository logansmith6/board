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
        ${this.username +" "+ this.password +" "+ this.email}<br>
        `
        

    }
}