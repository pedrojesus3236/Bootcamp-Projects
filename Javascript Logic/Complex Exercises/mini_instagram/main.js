



// Main instagram class

class Instagram {

    constructor () {

        this.NO_OPTION = "We don't have that option\n";
        this.ASK_SELECT = "Select an option\n";
        this.GET_NAME = "What is your name?\n";
        this.GET_EMAIL = "What is your email?\n";
        this.GET_PASSWORD = "What is your password?\n";
        this.EMAIL_TAKEN = "Sorry, that email is already taken\n";
        this.REGISTRATION = "Thank you for your registration, welcome!\n";
        this.VALID_EMAIL = "Insert a valid email\n";
        this.NO_ACCOUNT = "We don't have that account\n";
        this.NOT_LOGGED_IN = "Sorry, you have to be logged in to use that functionality\n";
        this.LOGGED_OUT = "You logged out, see you later\n";
        this.FOLLOWED_EMAIL = "What email do you want to follow?\n";
        this.USER_DONT_EXIST = "That user does not exist\n";
        this.ALREADY_LOGGED_IN = "You are already logged in\n";
        this.INCORRECT_PASS = "The password is incorrect\n";
        this.LOGOUT_FIRST_BEFORE_NEW_ACCOUNT = "log out first before you create a new account\n";
        this.END_PROGRAM = "You left the program, bye";
        this.NOW_FOLLOW = "You now follow ";
        this.SEARCHED_EMAIL = "What email do you want to search?\n";
        this.NO_RESULTS_FOR_QUERY = "We have no results for that query\n";
        this.LEAVE_PROGRAM = false;
        this.LOGGED_IN = false;
        this.EMAIL;
        this.PASSWORD;
        this.arraySignedUsers = [];
        
    }


    createUser (name, password, email) {
       
        let userProperties = {
            name: name,
            password: password,
            email: email,
            followers: 0,
            following: 0
        }
        
        return userProperties;
    }

  
    // Sign up method

    signUp() {

        if (this.LOGGED_IN === true) {

            alert(this.LOGOUT_FIRST_BEFORE_NEW_ACCOUNT);
            return;
       }

        let userName = prompt(this.GET_NAME);   

        let userEmail;

        let breakWhile = false;

        while(breakWhile === false) {

            userEmail = this.getEmail();

            if (userEmail === "exit*") {

                return;
            }

            let userPass;
            
            if (this.hasUserEmail(userEmail) === true) {

                alert(this.EMAIL_TAKEN);

            } else if (this.validateEmail(userEmail) === true) {

                userPass = prompt(this.GET_PASSWORD);
                alert(this.REGISTRATION);
                breakWhile = true;
                this.arraySignedUsers.push(this.createUser(userName, userPass, userEmail));
                
            } else {

                alert(this.VALID_EMAIL);
            }

        }
        return; 
    }

    // End of sign up method



    // Auxiliary functions of sign up

    validateEmail(userEmail) {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.trim())) {

            return true; 
        } else {
            return false;
        }
    }

    getEmail() {
        let userEmail = prompt(this.GET_EMAIL);

        userEmail = userEmail.trim();
        return userEmail;
    }

    // End of auxiliary functions of sign up



    // Log in method

    login() {
        
        if (this.LOGGED_IN === true) {

            alert(this.ALREADY_LOGGED_IN);
            return;
       }

        this.EMAIL = this.loginEmail();
       
        this.PASSWORD = this.loginPass();
        
        this.getUser(this.EMAIL);

        

        return this.EMAIL;
    }

    // End of log in method



    // Auxiliary functions of log in 

    getUser() {

        for (let i = 0; i < this.arraySignedUsers.length; i++) {

            if (this.EMAIL === this.arraySignedUsers[i].email && this.PASSWORD === this.arraySignedUsers[i].password) {

                alert("Welcome, " + this.arraySignedUsers[i].name + ".\n");
                this.LOGGED_IN = true;
            } 
        }
        return;
    }

    loginEmail() {
        
        let loginEmail = prompt(this.GET_EMAIL);

        loginEmail = loginEmail.trim();

        if (this.hasUserEmail(loginEmail) === false) {

            alert(this.NO_ACCOUNT);
            return;
        }
        return loginEmail;    
    }

    loginPass() {

        let loginPassword = prompt(this.GET_PASSWORD); 

        if (this.hasUserPassword(loginPassword) === false) {

            alert(this.INCORRECT_PASS);
            return;
        }
        return loginPassword;
    }

    // End of auxiliary functions of log in 



    // Exit function 

    exit() {

        this.LEAVE_PROGRAM = true;
        alert(this.END_PROGRAM);
    }

    // End of exist function 



    // Log out function

    logout() {

        if (this.LOGGED_IN === false) {

            alert(this.NOT_LOGGED_IN);
        } else {

            this.LOGGED_IN = false;
            alert(this.LOGGED_OUT);
        }
        return;
    }

    // End of log out function



    // Follow function

    follow() {

        if (this.LOGGED_IN === false) {

            return alert(this.NOT_LOGGED_IN);
        }

        let followEmail = prompt(this.FOLLOWED_EMAIL);

        if (this.hasUserEmail(followEmail) === false) {

            alert(this.USER_DONT_EXIST);
        }
    
        for (let i = 0; i < this.arraySignedUsers.length; i++) {

            if (followEmail === this.arraySignedUsers[i].email) {

                this.arraySignedUsers[i].followers++;
                alert(this.NOW_FOLLOW + this.arraySignedUsers[i].name + "\n");
            }   

            if (this.EMAIL === this.arraySignedUsers[i].email) {

                this.arraySignedUsers[i].following++;
            }     
        }   
        return;
    }
    
    // End of follow function



    // Search Function

    search() {

        if (this.LOGGED_IN === false) {

            return alert(this.NOT_LOGGED_IN);
        }

        let searchedEmail = prompt(this.SEARCHED_EMAIL);

        searchedEmail = searchedEmail.trim();

        if (this.hasUserEmail(searchedEmail) === false) {

            alert(this.NO_RESULTS_FOR_QUERY);
        }
        
        for (let i = 0; i < this.arraySignedUsers.length; i++) {

            if (searchedEmail === this.arraySignedUsers[i].email) {

                alert(this.arraySignedUsers[i].name);
                alert(this.arraySignedUsers[i].email);
                alert("Followers: " + this.arraySignedUsers[i].followers);
                alert("Following: " + this.arraySignedUsers[i].following + "\n");
            } 
        }
        return; 
    }
    

    // End of search function



    // Reusable functions

    hasUserEmail(userEmail) {
    
        for (let i = 0; i < this.arraySignedUsers.length; i++) {

            if (userEmail === this.arraySignedUsers[i].email) {

                return true;
            } 
        }
        return false;
    }

    hasUserPassword(userPass) {
    
        for (let i = 0; i < this.arraySignedUsers.length; i++) {

            if (userPass === this.arraySignedUsers[i].password) {

                return true;
            } 
        }
        return false;
    }



    // Ask user function

    askUser() {

        while (this.LEAVE_PROGRAM !== true) {

            let select = prompt(this.ASK_SELECT);
        
            switch (select) {
                case "log in":
                    this.login();
                    break;
                case "sign up":
                    this.signUp();
                    break;
                case "exit":
                    this.exit();
                    break;
                case "search":
                    this.search();
                    break;
                case "log out":
                    this.logout();
                    break;
                case "follow":
                    this.follow();
                    break;
                default:
                    alert(this.NO_OPTION)
            }
        }
    }
}


let insta = new Instagram();
insta.askUser();